/**
 * @namespace WORKAREA.toggleClassButton
 */
WORKAREA.registerModule('toggleClassButton', (function () {
    'use strict';

    var handleToggleEvent = function (event) {
            var $button = $(event.currentTarget),
                data = $button.data('toggleClassButton');

            // Prevent anchor default event only.
            if ($button.is('a')) { event.preventDefault(); }

            if (data.closest === true) {
                updateClosest(data.target, data.class, $button);
                return;
            }

            updateClass(data.target, data.class);
        },

        updateClass = function (toggleTarget, className) {
            $(toggleTarget).toggleClass(className);
        },

        updateClosest = function (toggleTarget, className, $button) {
            $button.closest(toggleTarget).toggleClass(className);
        },

        /**
         * Module Init
         * Add a class to another element on click
         * Accepts: data{'target': 'x', class: 'y', closest: boolean}
         */

        init = function ($scope) {
            $('[data-toggle-class-button]', $scope)
                .on('click', handleToggleEvent);
        };

    return {
        init: init
    };
}()));
