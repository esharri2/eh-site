class Default {
  render(data) {
    /*html*/
    return `
    <html>
      ${this.head(data)}
      <body class="relative">
        ${this.skip_to_content()}
        ${this.back_to_top()}
        <header>
          <div class="container">${this.navigation(data)}</div>
        </header>
        <main id="main" class="min-h-screen">${data.content}</main>
        ${this.footer(data, this)}
      </body>
    </html>`;
  }
}

module.exports = Default;
