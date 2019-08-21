module Workarea
  module Storefront
    module ProductMediaSliderHelper
      def mobile_pdp_image_slider_options(product_id)
        {
          waitForImages: true,
          options: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            mobileFirst: true,
            dots: true,
            arrows: true,
            responsive: [
              {
                  breakpoint: Workarea.config.storefront_break_points[:medium],
                  settings: {
                    slidesToShow: 4,
                    dots: false,
                    vertical: true,
                    verticalSwiping: true
                  }
              }
            ]
          },
          forceSetPosition: true
        }.to_json
      end
    end
  end
end
