import backToTop from "./backToTop.js";
import Nav from "./nav.js";
import ClickToCopy from "./clickToCopy.js";

backToTop();
new Nav();

document
  .querySelectorAll("[data-click-to-copy]")
  .forEach((component) => new ClickToCopy(component));