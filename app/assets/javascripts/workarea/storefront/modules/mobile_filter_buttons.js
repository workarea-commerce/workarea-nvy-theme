/**
 * @namespace WORKAREA.mobileFilterButtons
 *
 * A clone of WORKAREA.mobileNavButton
 */
WORKAREA.registerModule('mobileFilterButtons', (function () {
    'use strict';

    var closeButton = JST['workarea/storefront/templates/mobile_filters_nav_close_button'],

        deactivate = function ($nav) {
            $nav
            .removeClass('mobile-filters-nav--active mobile-filters-nav--closing')
            .off(WORKAREA.transitionEvents.detect());
        },

        activate = function ($nav) {
            $nav.addClass('mobile-filters-nav--active');
        },

        close = function ($nav, event) {
            event.preventDefault();
            $nav.addClass('mobile-filters-nav--closing');
            if (WORKAREA.environment.isTest) {
                // Animations are disabled in test, transition event will never fire
                deactivate($nav);
            } else {
                $nav.on(WORKAREA.transitionEvents.detect(), _.partial(deactivate, $nav));
            }
        },

        addCloseButton = function ($nav) {
            var $button = $(closeButton({
                content: I18n.t('workarea.storefront.products.filter_nav_close_button')
            }));

            $button.on('click', _.partial(close, $nav));

            $nav.prepend($button);
        },

        inject = function () {
            var $nav = $('<div class="mobile-filters-nav" id="mobile_filters_nav" />'),
                $content = $('#aside-content');

            $nav.append($content);

            addCloseButton($nav);

            $('body').append($nav);

            _.defer(activate, $nav);
        },

        openMobileFilters = function (event) {
            event.preventDefault();

            if (_.isEmpty($('#mobile_filters_nav'))) {
                inject();
            } else {
                activate($('#mobile_filters_nav'));
            }
        },

        testBodyClick = function (event) {
            var $target = $(event.target),
                $nav = $('#mobile_filters_nav'),
                $navButton = $('[data-mobile-filter-button]'),

                navIsActive = $nav.hasClass('mobile-filters-nav--active'),
                clickIsOutsideNav = _.isEmpty($target.closest($nav).addBack($nav)),
                clickIsNavButton = ! _.isEmpty($target.closest($navButton).addBack($navButton));

            if (navIsActive && clickIsOutsideNav && ( ! clickIsNavButton)) {
                close($nav, event);
            }
        },

        /**
         * @method
         * @name init
         * @memberof WORKAREA.mobileFilterButtons
         */
        init = function ($scope) {
            $('[data-mobile-filter-button]', $scope)
            .on('click', openMobileFilters);
        };

    $('body').on('click.mobileFilterButtons', testBodyClick);

    return {
        init: init
    };
}()));
