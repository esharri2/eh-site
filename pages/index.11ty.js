class Index {
  data() {
    return {
      layout: "default",
    };
  }
  async render({ site }) {
    /*html*/
    return `
    <div class="container">
      ${this.h1(site.title)}
      <p class="font-body pt-4">This is a simple Eleventy starter. It uses plain JavaScript templates and TailwindCSS. <a class="underline" href="https://github.com/esharri2/ev-eleventy-starter">Check out the notes here.</a></p>
    </div>
    `;
  }
}

module.exports = Index;
