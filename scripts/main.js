import backToTop from "./backToTop.js";
import Nav from "./nav.js";
import colorSwitch from "./colorSwitch.js";
import ClickToCopy from "./clickToCopy.js";

new Nav();
colorSwitch();
backToTop();
document
  .querySelectorAll("[data-click-to-copy]")
  .forEach((component) => new ClickToCopy(component));