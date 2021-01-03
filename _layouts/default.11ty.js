class Default {
  render(data) {
    /*html*/
    return `
    <html class="bg-purple-100 text-gray-900">
      ${this.head(data)}
      <body class="m-auto mt-8 max-w-4xl">
        <header>${this.navigation(data)}</header>
        <main class="p-4">${data.content}</main>
      </body>
    </html>`;
  }
}

module.exports = Default;
