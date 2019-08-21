module Workarea
  Plugin.append_stylesheets(
    "storefront.settings",
    "workarea/storefront/settings/font_families",
  )

  Plugin.append_stylesheets(
    "storefront.generic",
    "workarea/storefront/base/input_checkbox",
    "workarea/storefront/base/input_radio"
  )

  Plugin.append_stylesheets(
    "storefront.components",
    "workarea/storefront/components/account_menu",
    "workarea/storefront/components/browsing_controls",
    "workarea/storefront/components/color_box",
    "workarea/storefront/components/login",
    "workarea/storefront/components/overlay",
    "workarea/storefront/components/recommendations",
    "workarea/storefront/components/product_media",
    "workarea/storefront/components/validation_icon"
  )

  Plugin.append_javascripts(
    "storefront.modules",
    "workarea/storefront/modules/toggle_class_button",
    "workarea/storefront/modules/user_welcome_placeholder"
  )

  Plugin.append_javascripts(
    "storefront.templates",
    "workarea/storefront/templates/user_welcome"
  )

  Plugin.append_partials(
    "storefront.current_user",
    "workarea/storefront/users/nvy_current_user"
  )
end
