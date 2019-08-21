/**
 * @namespace WORKAREA.alternateImageButtons
 */
WORKAREA.registerModule('alternateImageButtons', (function () {
    'use strict';

    var updateImageButtons = function ($selectedImageButton, $container) {
            var $imageButtons = $(
                    '.product-media__alt-image-link',
                    $container
                );

            $imageButtons
            .removeClass('product-media__alt-image-link--selected');

            $selectedImageButton
            .addClass('product-media__alt-image-link--selected');
        },

        updatePrimaryImageButton = function ($selectedImageButton, $container) {
            var $primaryImageButton = $(
                    '.product-media__primary-image-link', $container
                ),
                zoomImageSrc = $selectedImageButton.attr('href');

            $primaryImageButton.attr('href', zoomImageSrc);
        },

        updatePrimaryImage = function ($selectedImageButton, $container) {
            var $primaryImage = $(
                    '.product-media__primary-image-link-image', $container
                ),
                imageData = $selectedImageButton.data('alternateImageButton'),
                detailImageSrc = imageData.src;

            $primaryImage.attr('src', detailImageSrc);
        },

        handleImageResponse = function ($selectedImageButton, $container) {
            updateImageButtons($selectedImageButton, $container);
            updatePrimaryImageButton($selectedImageButton, $container);
            updatePrimaryImage($selectedImageButton, $container);
        },

        handleImageButtonClick = function (event) {
            var $selectedImageButton = $(event.currentTarget),
                $details = $selectedImageButton.closest('.product-details'),
                $primaryImage = $('.product-media__primary-image', $details),
                imageData = $selectedImageButton.data('alternateImageButton'),
                detailImageSrc = imageData.src,
                gettingImage = WORKAREA.image.get(detailImageSrc);

            event.preventDefault();

            WORKAREA.loading.createLoadingIndicator(gettingImage, {
                container: $primaryImage,
                cssModifiers: 'loading--fill-parent'
            });

            gettingImage.done(
                _.partial(handleImageResponse, $selectedImageButton, $details)
            );
        },

        /**
         * @method
         * @name init
         * @memberof WORKAREA.alternateImageButtons
         */
        init = function ($scope) {
            $('[data-alternate-image-button]', $scope)
            .on('click', handleImageButtonClick);
        };

    return {
        init: init
    };
}()));
