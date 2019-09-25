Workarea Nvy Theme
================================================================================

Nvy Theme plugin for the Workarea platform.

[Nvy Theme Demo Site](https://nvy-theme.demo.workarea.com)

[Documentation for workarea themes on homebase](https://homebase.weblinc.com/plugins/theme)

For bug reports and improvement suggestions create a ticket in the [NVYTHEME jira
project.](https://jira.tools.weblinc.com/projects/NVYTHEME/issues)

Browser Support
--------------------------------------------------------------------------------

Due to the occasional use of flexbox; NvyTheme only supports IE 10+
If you need to support older versions of IE you will need to provide alternative styles
where flexbox is used.

Optimal Image Sizes
--------------------------------------------------------------------------------

| Image Type| Optimum size | Note |
|----------|--------|-------|
| Logo - mobile | 40px x 40px ||
| Logo - desktop | 160px x 64px ||
| Product Images | 944px x 1416px | This size does not account for use of image-zoom, it is recommended to *at least* double this size if your client is likely to want zoom functionality. |
| Blog thumbnails | 160px x 160px ||

Out of the box plugin support
--------------------------------------------------------------------------------

The following workarea plugins are supported by NvyTheme, and are dependencies of the plugin.

* Blog
* Gift Cards
* Product Quickview
* Reviews
* Share
* Swatches
* Styled Selects
* Slick Slider
* Wish Lists

Getting Started
--------------------------------------------------------------------------------

Add the gem to your application's Gemfile:

```ruby
# ...
gem 'workarea-nvy_theme'
# ...
```

Update your application's bundle.

```bash
cd path/to/application
bundle
```

Theme Configuration
--------------------------------------------------------------------------------

### Recommended initializer configuration

While you are able to configure Workarea themes from any initializer it is recommended
that you create a new initializer called theme.rb using the following code

```ruby
Workarea.configure do |config|
  config.theme = config.theme.merge(
    color_scheme: "nvy",
    primary_font_family: "lora",
    secondary_font_family: "overpass"
  )
end
```

This will set your application up with the default configuration options, but allow you to
change them easily.

---

### Color Schemes

Nvy comes with 3 color schemes pre-defined for demo and learning purposes.

To change the color scheme in your application, set the color_scheme configuration
in your theme initializer to one of the following configurations:

Default:

```ruby
  Workarea.config.theme[:color_scheme] = "nvy"
  Workarea.config.theme[:color_scheme] = "neutral"
  Workarea.config.theme[:color_scheme] = "vermillion"
```

#### Creating a new color scheme

We will be updating theme infastructure in the near future that will make this process
more developer friendly. In the meantime you can create a new color scheme by:

1. Copying one of the existing color scheme files into your application re-nameing the file,
2. Update the color_scheme config to match the name of your new color scheme file.

__Example__

This will create a sass file called `_custom_color_scheme.scss` in your host application, please change \<your-app-name\> in the following command to the directory of your application.

From your ~/src directory, ensure you have workarea-nvy-theme pulled down

```bash
cp -i workarea-nvy-theme/app/assets/stylesheets/workarea/storefront/theme_config/_nvy_color_scheme.scss <your-app-name>/app/assets/stylesheets/workarea/storefront/theme_config/_custom_color_scheme.scss
```

---

### Font Stacks

nvy Theme includes configurable font-stack functionality!

You can configure the primary and secondary font stacks using the theme
configuration initializer. To change the font stacks in your application set the
primary_font_family and secondary_font_family initializer values to one of the font_stacks
defined in workarea-nvy-theme/config/initializers/theme.rb

Example:

```ruby
config.theme = config.theme.merge(
  primary_font_family: "poppins",
  secondary_font_family: "pt_serif"
)
```

The primary_font_family is used for body text throughout the site.
The secondary_font_family is used for most of the system content, buttons, headings, and other UI components.

#### Adding a new font

I recommend using google fonts where possible, the [googlefonts webfont helper](https://google-webfonts-helper.herokuapp.com) is a useful tool for downloading webfonts and easily generating @font-face CSS - give it a try!

1. Create a new directory in app/assets/fonts/workarea/storefront/<your_font_name_here>
2. Download woff and woff2 files for the font you want to use.
3. Place your font files in the directory we created in step 1.
4. Create a sass file for you @font-face declarations in /app/assets/stylesheets/workarea/storefront/theme_config/fonts/`_<your_font_name_here>.scss`
5. Update your theme initializer, adding a new font_stack and setting either the primary_font_family or secondary_font_family

Example configuration for Calibri font stack used as secondary font family:

```ruby
config.theme[:font_stacks] = config.theme.font_stacks.merge (
  calibri: 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
)

config.theme = config.theme.merge(
  secondary_font_family: "calibri"
)
```

Workarea Commerce Documentation
--------------------------------------------------------------------------------

See [https://developer.workarea.com](https://developer.workarea.com) for Workarea Commerce documentation.

License
--------------------------------------------------------------------------------

Workarea NVY Theme is released under the [Business Software License](LICENSE)
