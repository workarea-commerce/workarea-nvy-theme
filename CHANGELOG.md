Workarea Nvy Theme 1.1.1 (2019-06-25)
--------------------------------------------------------------------------------

*   Prevent test failures due to whitespace issues

    See: https://discourse.workarea.com/t/capybara-3-whitespace-issue/1519

    NVY-23
    Jake Beresford

*   Implement retina support for logo

    * Add original SVGs for logos, generate high resolution versions and optimize all logo assets
    * Add image_set_tag helper method for retina images using srcset
    * Implement image_set_tag for logo using new assets

    NVY-22
    Jake Beresford



Workarea Nvy Theme 1.1.0 (2019-04-03)
--------------------------------------------------------------------------------

*   Bump version for 1.1.0 release

    Jake Beresford

*   Update for v3.4 compatibility

    * Updates favicon tags to render rather than using helper
    * Storefront UI changes from v3.4 including via tracking, removal of autocorrect, and others.
    * Fixes tests for v3.4
    * Update CI scripts for mongo 4
    * Update gemspec to loosen plugin dependencies

    NVY-21
    Jake Beresford



Workarea Nvy Theme 1.0.1 (2019-02-19)
--------------------------------------------------------------------------------

*   Make email signup field text readable

    * Adds scoped style for .text-box within .page-footer, using page-footer-color as color

    NVY-19
    Jake Beresford

*   Display primary image on mobile if only 1 image is available for the product

    * Adjust styles for media primary image element to account for products with a single image on mobile
    * Update TODOs in README

    NVY-20
    Jake Beresford



Workarea Nvy Theme 1.0.0 (2018-11-28)
--------------------------------------------------------------------------------

*   Workarea Nvy Theme

    A simple apparel focused theme for Workarea.

    * Support for popular Workarea features like swatches, blog, and reviews.
    * 3 color schemes.
    * Nothing crazy here.
    Jake Beresford



