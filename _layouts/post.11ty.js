class Post {
  data() {
    return {
      layout: "default",
    };
  }
  render(data) {
    /*html*/
    return `<div>${data.content}</div>`;
  }
}

module.exports = Post;
