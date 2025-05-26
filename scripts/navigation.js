export default function () {
  const toggleMenuButton = document.querySelector("#openmenu");
  const nav = document.querySelector("nav");

  toggleMenuButton.addEventListener("click", () => {
    const navIsOpen = toggleMenuButton.getAttribute("aria-expanded") === "true";

    if (navIsOpen) {
      nav.classList.add("hidden");
      toggleMenuButton.setAttribute("aria-expanded", "false");
    } else {
      nav.classList.remove("hidden");
      toggleMenuButton.setAttribute("aria-expanded", "true");
    }
  });
}
