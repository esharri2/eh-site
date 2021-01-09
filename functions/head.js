module.exports = ({ site }) => /*html*/ `
<head>
  <title>${site.title}</title>
  <meta name="description" content="${site.description}">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preload" href="manrope-regular.woff2" as="font" type="font/woff2" crossorigin> 
  <link rel="stylesheet" href="/main.css">
  <script type="module" src="/main.js"></script>
</head>
`;
