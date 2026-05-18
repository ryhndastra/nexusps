export default defineNuxtPlugin(() => {
  const revealElements = () => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll"),
    );

    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.14,
      },
    );

    elements.forEach((element) => observer.observe(element));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", revealElements, { once: true });
  } else {
    requestAnimationFrame(revealElements);
  }
});
