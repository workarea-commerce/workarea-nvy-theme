$:.push File.expand_path('lib', __dir__)

# Maintain your gem's version:
require 'workarea/nvy_theme/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'workarea-nvy_theme'
  s.version     = Workarea::NvyTheme::VERSION
  s.authors     = ['Curt Howard']
  s.email       = ['choward@workarea.com']
  s.homepage    = 'https://github.com/workarea-commerce/workarea-nvy_theme'
  s.summary     = 'Nvy Theme is an apparel focused theme for the Workarea ecommerce platform'
  s.description = 'Nvy Theme is an apparel focused theme for the Workarea ecommerce platform'

  s.files = `git ls-files`.split("\n")

  s.license = 'Business Software License'

  s.add_dependency 'workarea', '~> 3.4.x'
  s.add_dependency 'workarea-theme', '~> 1.0.0'

  s.add_dependency 'workarea-blog', '~> 3.x', '>= 3.3.0'
  s.add_dependency 'workarea-gift_cards', '~> 3.x', '>= 3.4.0'
  s.add_dependency 'workarea-product_quickview', '~> 1.x', '>= 1.2.0'
  s.add_dependency 'workarea-reviews', '~> 3.x'
  s.add_dependency 'workarea-share', '~> 1.x', '>= 1.2.0'
  s.add_dependency 'workarea-swatches', '~> 1.x'
  s.add_dependency "workarea-styled_selects", '~> 1.x'
  s.add_dependency "workarea-slick_slider", '~> 1.x'
  s.add_dependency "workarea-wish_lists", '~> 2.x', '>= 2.1.0'
end
