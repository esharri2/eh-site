class Blog {
  data() {
    return {
      layout: "default",
    };
  }
  async render(data) {
    const sortedPosts = data.collections.post.sort((a, b) => {
      const aDate = new Date(a.data.date).getTime();
      const bDate = new Date(a.data.date).getTime();
      if (aDate < bDate) {
        return 1;
      } else {
        return -1;
      }
    });
    /*html*/
    return `
    <div class="container">
    <h1 class="font-display text-5xl">Blog</h1>
      <ul>
          ${sortedPosts
            .map((post) => {
              /*html*/
              return `
              <li class="pt-8">
                <a class="text-xl" href="${post.url}">${post.data.title}</a>
                <p>${this.date(post.data.date)}</p>
                <p>${post.data.description}</p>
              </li>`;
            })
            .join("")}
      </ul>
    </div>`;
  }
}

module.exports = Blog;
