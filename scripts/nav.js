class Nav {
  selectors = {
    nav: "[data-nav]",
    linkList: "[data-nav-links]",
    open: "[data-nav-open]",
    close: "[data-nav-close]",
  };

  elements = {
    nav: document.querySelector(this.selectors.nav),
  };

  constructor() {
    this.init();
  }

  init() {
    this.elements.linkList = this.elements.nav.querySelector(
      this.selectors.linkList
    );
    this.elements.open = this.elements.nav.querySelector(this.selectors.open);
    this.elements.close = this.elements.nav.querySelector(this.selectors.close);
    this.bindEvents();
  }

  bindEvents() {
    this.elements.open.addEventListener("click", this.open.bind(this));
  }

  open() {
    this.elements.linkList.classList.remove("sr-only");
    this.elements.linkList.classList.toggle("animate-fade-in");
    this.elements.close.addEventListener("click", this.close.bind(this), {
      once: true,
    });
  }

  close() {
    this.elements.linkList.classList.add("sr-only");
    this.elements.linkList.classList.toggle("animate-fade-in");
  }
}

export default Nav;
