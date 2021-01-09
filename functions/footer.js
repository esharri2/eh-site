module.exports = (data, context) =>
  /*html*/
  `
  <footer class="border-t border-purple-400 border-solid p-4">
    ${context.navigation_footer(data)}
    <p class="text-xs mt-4">Copyright ${new Date().getFullYear()}</p>
    <p class="text-xs">
      <a
        class="underline"
        href="${data.site.builtBy.url}">
        Site by ${data.site.builtBy.name}
      </a>
    </p>
  </footer>`;
