class About {
  data() {
    return {
      layout: "default",
    };
  }
  async render() {
    /*html*/
    return `
    <div class="container">
      <h1 class="font-display text-5xl">About</h1>
      <p class="font-body pt-4">This is a simple Eleventy starter. <a class="underline" href="https://github.com/esharri2/ev-eleventy-starter">Check out notes here!</a></p>
    </div>
    `;
  }
}

module.exports = About;
