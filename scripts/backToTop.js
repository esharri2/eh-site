const backToTop = () => {
  const backToTopEl = document.querySelector("#backToTop");
  const backToTopFlag = document.querySelector("#backToTopFlag");
  const toggleClasses = ["opacity-0", "invisible"];

  let observer = new IntersectionObserver((entries) => {
    const { boundingClientRect, isIntersecting } = entries[0];
    if (isIntersecting) {
      backToTopEl.classList.remove(...toggleClasses);
      backToTopEl.addEventListener(
        "click",
        () => {
          backToTopEl.classList.add(...toggleClasses);
        },
        { once: true }
      );
    } else if (!isIntersecting && boundingClientRect.top > 0) {
      backToTopEl.classList.add(...toggleClasses);
    }
  });
  observer.observe(backToTopFlag);
};

export default backToTop;
