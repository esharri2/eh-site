module.exports = ({ page, navigation }) => /*html*/ `
<nav>
  <ul class="flex">
  ${navigation
    .map((item) => {
      console.log(page.filePathStem);
      const isCurrentPage = page.filePathStem === item.key;
      /*html */
      return `<li class="p-4 ${isCurrentPage && "underline"}" ${
        isCurrentPage && `aria-current="page"`
      }><a href="${item.key}">${item.title}</a></li>`;
    })
    .join("")}
  </ul>
</nav>
`;
