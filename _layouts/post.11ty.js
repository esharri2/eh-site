class Post {
  data() {
    return {
      layout: "default",
    };
  }
  render(data) {
    /*html*/
    return `
    <article>
      ${this.h1(data.title)}
      <p>${this.date(data.date)}</p>
      <p>${data.description}</p>
      <div class="mt-8">
        ${data.content}      
      </div>
    </article>`;
  }
}

module.exports = Post;
