module Workarea
  module Storefront
    module ImageHelper
      def image_set_tag(source, srcset = {}, options = {})
        srcset = srcset.map { |src, size| "#{path_to_image(src)} #{size}" }.join(', ')
        image_tag(source, options.merge(srcset: srcset))
      end
    end
  end
end
