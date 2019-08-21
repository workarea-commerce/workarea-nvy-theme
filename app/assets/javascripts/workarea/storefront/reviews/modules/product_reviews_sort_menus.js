/**
 * @namespace WORKAREA.productReviewsSortMenus
 */
WORKAREA.registerModule('productReviewsSortMenus', (function () {
    'use strict';

    var insertSortSelectBox = function (index, section) {
            $('.reviews__header', section).append(
                JST['workarea/storefront/reviews/templates/sort_by_property']()
            );
        },

        sortNewToOld = function ($reviews) {
            return _.sortBy($reviews, function (review) {
                return -($(review).data('productReviewSectionEntry').createdAt);
            });
        },

        sortOldToNew = function ($reviews) {
            return _.sortBy($reviews, function (review) {
                return $(review).data('productReviewSectionEntry').createdAt;
            });
        },


        sortHighToLow = function ($reviews) {
            return _.sortBy($reviews, function (review) {
                return -($(review).data('productReviewSectionEntry').rating);
            });
        },

        sortLowToHigh = function ($reviews) {
            return _.sortBy($reviews, function (review) {
                return $(review).data('productReviewSectionEntry').rating;
            });
        },

        handleSortSelectChange = function (event) {
            var $reviews = $(
                    '[data-product-review-section-entry]', event.delegateTarget
                ),

                action = $(event.currentTarget).val(),

                actions = {
                    oldest: function () {
                        return sortOldToNew($reviews);
                    },
                    newest: function () {
                        return sortNewToOld($reviews);
                    },
                    lowest: function () {
                        return sortLowToHigh($reviews);
                    },
                    highest: function () {
                        return sortHighToLow($reviews);
                    }
                };

            $('.reviews__review-group', event.delegateTarget)
            .html(actions[action]());
        },

        /**
         * @method
         * @name init
         * @memberof WORKAREA.productReviewsSortMenus
         */
        init = function ($scope) {
            $('.reviews', $scope)
            .each(insertSortSelectBox)
            .on(
                'change',
                '[data-product-reviews-sort-menu]',
                handleSortSelectChange
            );
        };

    return {
        init: init
    };
}()));
