const colorSwitch = () => {
  const trigger = document.querySelector("[data-color-switch]");
  if (!trigger) {
    return;
  }

  trigger.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  });
};

export default colorSwitch;
