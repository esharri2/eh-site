class Nav {
  selectors = {
    nav: "[data-nav]",
    linkList: "[data-nav-links]",
    toggle: "[data-nav-toggle]",
    openIcon: "[data-nav-open-icon]",
    closeIcon: "[data-nav-close-icon]",
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
    this.elements.toggle = this.elements.nav.querySelector(
      this.selectors.toggle
    );
    this.elements.openIcon = this.elements.toggle.querySelector(
      this.selectors.openIcon
    );
    this.elements.closeIcon = this.elements.toggle.querySelector(
      this.selectors.closeIcon
    );
    this.bindEvents();
  }

  bindEvents() {
    this.elements.toggle.addEventListener("click", this.toggle.bind(this));
  }

  toggle() {
    if (this.elements.toggle.getAttribute("aria-expanded") === "true") {
      this.close();
    } else {
      this.open();
    }
  }

  toggleIcons() {
    this.elements.openIcon.classList.toggle("hidden");
    this.elements.closeIcon.classList.toggle("hidden");
  }

  open() {
    this.elements.toggle.setAttribute("aria-expanded", "true");
    this.toggleIcons();
    this.elements.linkList.classList.remove("hidden");
    document.querySelector("body").classList.add("overflow-hidden");
  }

  close() {
    this.elements.toggle.setAttribute("aria-expanded", "close");
    this.toggleIcons();
    this.elements.linkList.classList.add("hidden");
    document.querySelector("body").classList.remove("overflow-hidden");
  }
}

export default Nav;
