/**
 * @namespace WORKAREA.mobileNavButton
 *
 * A clone of WORKAREA.mobileFilterButtons
 */
WORKAREA.registerModule('mobileNavButton', (function () {
    'use strict';

    var replaceNavigation = function ($mobileNav, response) {
            var $navigation = $(response);

            WORKAREA.initModules($navigation);

            $mobileNav.empty().append($navigation);
        },

        requestNav = function (event) {
            var $mobileNav = $(event.delegateTarget);

            event.preventDefault();

            $.get(event.currentTarget.href)
            .done(_.partial(replaceNavigation, $mobileNav));
        },

        bindNavigationActions = function ($mobileNav) {
            $mobileNav
            .on('click', '.mobile-nav__back-button', requestNav)
            .on('click', '.mobile-nav__item--has-children a', requestNav)
            .on('click', '.mobile-nav__close-button', function (event) {
                event.preventDefault();
                deactivateMobileNav($(event.delegateTarget), $('#overlay'));
            });
        },

        deactivateMobileNav = function ($mobileNav, $overlay) {
            $mobileNav.removeClass('mobile-nav--active');
            $overlay.removeClass('overlay--active');
        },

        activateMobileNav = function ($mobileNav, $overlay) {
            $mobileNav.addClass('mobile-nav--active');
            $overlay.addClass('overlay--active');
        },

        injectMobileNav = function (response) {
            var $mobileNav = $('<div class="mobile-nav" id="mobile_nav" />'),
                $overlay = $('<div class="overlay" id="overlay"/>');

            $mobileNav.append(response);

            WORKAREA.initModules($mobileNav);

            activateMobileNav($mobileNav, $overlay);
            bindNavigationActions($mobileNav);

            $('body').append($overlay, $mobileNav);
        },

        requestMobileNav = function (href) {
            $.get(href).done(injectMobileNav);
        },

        openMobileNav = function (event) {
            event.preventDefault();

            if (_.isEmpty($('#mobile_nav'))) {
                requestMobileNav(event.currentTarget.href);
            } else {
                activateMobileNav($('#mobile_nav'), $('#overlay'));
            }
        },

        testBodyClick = function (event) {
            var $target = $(event.target),
                $mobileNav = $('#mobile_nav'),
                $navButton = $('#mobile_nav_button'),
                $overlay = $('#overlay'),

                navIsActive = $mobileNav.hasClass('mobile-nav--active'),
                clickIsOutsideNav = _.isEmpty($target.closest($mobileNav).addBack($mobileNav)),
                clickIsNavButton = ! _.isEmpty($target.closest($navButton).addBack($navButton));

            if (navIsActive && clickIsOutsideNav && ( ! clickIsNavButton)) {
                event.preventDefault();
                deactivateMobileNav($mobileNav, $overlay);
            }
        },

        /**
         * @method
         * @name init
         * @memberof WORKAREA.mobileNavButton
         */
        init = function ($scope) {
            $('#mobile_nav_button', $scope).on('click', openMobileNav);
        };

    $('body').on('click.mobileNavButton', testBodyClick);

    return {
        init: init
    };
}()));
