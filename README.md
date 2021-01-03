<<<<<<< HEAD
# ev-eleventy-starter
=======
# WIP WIP WIP WIP

# EvEleventy Starter

This is an Eleventy starter project. It uses plain JavaScript templates and
TailwindCSS. It doesn't use a bundler or any special templating languages.

## Motivation

This is a simple starter project I created for myself in order to side-step a
few features I was seeing in most other
[Eleventy starter projects](https://www.11ty.dev/docs/starter/).

1. First, I wanted to avoid templating languages. I've had to use a lot in my
   career (Handlebars, HTL, Liquid, Nunjucks, JSX), and I thought it would be
   nice to just stick with JavaScript and have to do less language switching.

1. I also wanted to avoid using a bundler. It's uncessary overhead in a lot of
   cases, especially when building a static site that's using little to no
   JavaScript.

1. Finally, I wanted to use [TailwindCSS](https://tailwindcss.com/). Since I'm
   not using a bundler, I'm just running the PostCSS CLI tool to create my CSS
   file in a temporary directory, and Eleventy is passing that to the build
   directory.

## Features

### Client-side JavaScript

There's nothing in this starter for client-side JavaScript.

### CSS

This starter uses [TailwindCSS](https://tailwindcss.com/). The CSS file is
generated by the PostCSS CLI tool in the dev and build commands. The transformed
CSS file goes into a `/_temp` directory that has been added as an Eleventy watch
target.

### Fonts

Fonts are included in `/fonts`. Fonts load via
["Unceremonious @font-face"](https://www.zachleat.com/web/comprehensive-webfonts/#font-face)
and the "display" font is
[preloaded](https://www.zachleat.com/web/comprehensive-webfonts/#preload) to
reduce [FOUT](https://www.zachleat.com/web/webfont-glossary/#fout).

### Navigation

Set up the site navigation in `_data/navigation.json`.

### Production optimization

HTML and CSS minification happens during a production build.

### Templating

[JavaScript templates](https://www.11ty.dev/docs/languages/javascript/) are used
in place of template languages. For partials, it uses
[JavaScript template functions](https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions).
During the build, it reads the contents of `/functions`, requires each file, and
adds its export as a template function.
>>>>>>> bbe315753f72598ee410139bee62cee827190c28
