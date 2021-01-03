class Blog {
  data() {
    return {
      layout: "default",
    };
  }
  async render(data) {
    console.log(data.collections);
    /*html*/
    return `
    <h1 class="font-display text-5xl">Blog</h1>
    <ul>
        ${data.collections.post
          .map((post) => {
            return `<li><a href="${post.url}">${post.data.title}</a></li>`;
          })
          .join("")}
    </ul>`;
  }
}

module.exports = Blog;
