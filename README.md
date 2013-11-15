SkyLabels.js
======

### Fun, Compact & Accessible Forms

[Try out a live demo](http://thoughtbot.github.io/slider/)

## Why SkyLabels.js?

* Customizable through CSS. Changes animations, styles, etc.
* Accessible (uses a label element).
* Doesn't require that you change your layout. The labels slide above all other content.
* Easy to read the labels even when the input is focused.

## Getting Started

1. Download JavaScript & CSS files. Get them from [/dist/sky-labels.min.js](dist/sky-labels.min.js)
   and [/dist/sky-labels.css](/dist/sky-labels.css)
2. Put JavaScript & CSS files in your CSS and JavaScript directories
3. Link to the JavaScript in your `<head>` tag or near the end of the `<body>`
   tag. Be sure to add `sky-labels.min.js` below jQuery.
4. Wrap inputs & labels in a `<section>`, `<div>` or other block level element with
   the class `field-wrapper`. Be sure the label has a `for` that matches the input.
5. Call `setupSkyLabels()` in a `domready` or right after you include the
   `sky-labels.min.js`
6. Customize the CSS to your liking! You can change how it animates, colors,
   size, etc.

#### Example HTML

```html
<!-- In your <head> or just before the </body> tag -->
<script src="js/slider.js"></script>
<!-- Setup events for slide labels -->
<script type="text/javascript">
setupSkyLabels();
</script>
```

```html
<!-- Wrap the input and label in a block element with the class "field-wrapper" -->
<section class="field-wrapper">
  <!-- Be sure the for matches the input so that when the label is clicked the
input is focused -->
  <label for="first-name">First name</label>
  <input name="first-name" id="first-name" type="text">
</section>
```
Check out the [example
HTML](https://github.com/thoughtbot/slider/blob/gh-pages/index.html) from the
SkyLabels.js website

## Styling and animating your SkyLabels

SkyLabels.js adds and removes styles from the element with the class
`field-wrapper` so that you can customize every step of the slide.

The class are applied as follows

* `js-slider-focused` when the input has been focused
* `js-slider-has-text` when the input has text

You can apply styles and animations based on these two classes. See the [example
CSS](https://github.com/thoughtbot/slider/blob/gh-pages/stylesheets/_slider.scss)
from the SkyLabels.js website.
