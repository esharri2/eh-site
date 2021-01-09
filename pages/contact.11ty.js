class Contact {
  data() {
    return {
      layout: "default",
    };
  }
  async render() {
    /*html*/
    return `
    <div class="container">
      <h1 class="font-display text-5xl">Contact</h1>
      ${this.contact_form()}
    </div>
    `;
  }
}

module.exports = Contact;
