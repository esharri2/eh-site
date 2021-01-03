class Contact {
  data() {
    return {
      layout: "default",
    };
  }
  async render() {
    /*html*/
    return `
    <h1 class="font-display text-5xl">Contact</h1>
    <p class="font-body pt-4"><a class="underline" href="https://www.evan-harrison.com">www.evan-harrison.com</a></p>`;
  }
}

module.exports = Contact;
