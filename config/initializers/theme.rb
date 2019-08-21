Workarea.configure do |config|
  config.theme = {
    color_schemes: ['nvy', 'neutral', 'vermillion'],
    color_scheme: 'nvy',
    font_stacks: {
      overpass: '"Overpass", "Helvetica", "Helvetica Neue", sans-serif',
      lora: '"Lora", "Times New Roman", "Georgia", serif',
      roboto: '"Roboto", "HelveticaNeue", "Helvetica Neue", sans-serif',
      hind: '"Hind", Helvetica, Arial, sans-serif',
      source_serif_pro: '"Source Serif Pro", "Times New Roman", Georgia, serif',
      muli: '"Muli", Helvetica, Arial, sans-serif',
      playfair_display: '"Playfair Display", "Times New Roman", Georgia, serif'
    },
    primary_font_family: 'lora',
    secondary_font_family: 'overpass'
  }

  # Default page size for products
  config.per_page = 18

  # Number of recommendations to show on the detail page
  config.detail_page_recommendations_count = 4

  # Number of recommendations to show in the personalized recommendations
  # content block
  config.personalized_recommendations_count = 4

  # Number of recommendations to show in transactional emails
  config.email_recommendations_count = 4

  # Number of recommendations to show on the cart
  config.cart_recommendations_count = 4

  # How many products show in a category summary content block
  config.category_summary_product_count = 4

  # How many products show in product insights content block
  config.product_insights_count = 4
end
