/**
 * @namespace WORKAREA.userWelcomePlaceholders
 */
WORKAREA.registerModule('userWelcomePlaceholders', (function () {
    'use strict';

    var userWelcomeTemplate = JST['workarea/storefront/templates/user_welcome'],

        injectUserWelcomeMessage = function (currentUser, index, element) {
            $(element).replaceWith(userWelcomeTemplate({
                username: currentUser.first_name
            }));
        },

        testPlaceholders = function ($scope, currentUser) {
            $('[data-user-welcome-placeholder]', $scope).each(_.partial(injectUserWelcomeMessage, currentUser));
        },

        testCurrentUser = function ($scope, currentUser) {
            if (!currentUser.logged_in) { return; }

            testPlaceholders($scope, currentUser);
        },

        /**
         * @method
         * @name init
         * @memberof WORKAREA.userWelcomePlaceholders
         */
        init = function ($scope) {
            WORKAREA.currentUser.gettingUserData
            .done(_.partial(testCurrentUser, $scope));
        };

    return {
        init: init
    };
}()));
