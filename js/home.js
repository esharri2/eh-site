(function () {
  const htmlEl = document.querySelector("html");

  let isSystemDarkMode =
    matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;

  if (isSystemDarkMode) {
    htmlEl.classList.add("dark");
  }

  let isDarkMode = isSystemDarkMode ? true : false;

  const darkModeToggle = document.querySelector(".dark-mode");
  const darkModeIcon = darkModeToggle.querySelector("svg");

  darkModeToggle.addEventListener("click", function () {
    isDarkMode = !isDarkMode;

    if (darkModeIcon.style.transform) {
      darkModeIcon.removeAttribute("style");
    } else {
      darkModeIcon.style.transform = "rotate(180deg)";
    }

    if (isDarkMode) {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
  });
})();
