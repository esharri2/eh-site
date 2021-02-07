class ClickToCopy {
  selectors = {
    actionEls: "[data-action-icon], [data-action-label]",
    successEls: "[data-success-icon], [data-success-label]",
  };

  constructor(component) {
    this.component = component;
    this.elements = {};
    this.elements.button = component.querySelector("button");
    this.elements.input = component.querySelector("input");
    this.elements.successEls = component.querySelectorAll(
      this.selectors.successEls
    );
    this.elements.actionEls = component.querySelectorAll(
      this.selectors.actionEls
    );
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.elements.button.addEventListener("click", this.handleCopy.bind(this));
  }

  handleCopy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.elements.input.value).then(
        () => {
          this.elements.successEls.forEach((el) =>
            el.classList.remove("hidden")
          );
          this.elements.actionEls.forEach((el) => el.classList.add("hidden"));
        },
        () => {
          alert("Sorry. That didn't work.");
        }
      );
    } else {
      this.elements.input.select();
      document.execCommand("copy");
    }
  }
}

export default ClickToCopy;
