module.exports = ({ page, navigation_footer }) => /*html*/ `
<nav>
    <ul class="flex">
    ${navigation_footer
      .map((item) => {
        const isCurrentPage = page.filePathStem === item.key;
        /*html */
        return `<li class="pr-4 ${isCurrentPage && "underline"}" ${
          isCurrentPage && `aria-current="page"`
        }><a href="${item.key}">${item.title}</a></li>`;
      })
      .join("")}
    </ul>
</nav>
`;
