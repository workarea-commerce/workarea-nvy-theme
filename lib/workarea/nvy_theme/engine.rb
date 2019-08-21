require 'workarea/nvy_theme'

module Workarea
  module NvyTheme
    class Engine < ::Rails::Engine
      include Workarea::Plugin
      include Workarea::Theme
      isolate_namespace Workarea::NvyTheme

      config.to_prepare do
        Storefront::ApplicationController.helper(Storefront::ProductMediaSliderHelper)
        Storefront::ApplicationController.helper(Storefront::ImageHelper)
      end
    end
  end
end
