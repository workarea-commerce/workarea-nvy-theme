require 'workarea/testing/teaspoon'

Teaspoon.configure do |config|
  config.root = Workarea::NvyTheme::Engine.root
  Workarea::Teaspoon.apply(config)
end
