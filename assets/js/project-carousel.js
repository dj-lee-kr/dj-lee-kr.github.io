document.querySelectorAll("[data-project-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".project-index-track");
  const previousButton = carousel.querySelector(".project-index-nav--previous");
  const nextButton = carousel.querySelector(".project-index-nav--next");

  if (!track || !previousButton || !nextButton) return;

  const getScrollAmount = () => {
    const card = track.querySelector(".project-index-card");
    const styles = getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;

    return card ? card.getBoundingClientRect().width + gap : track.clientWidth;
  };

  const updateButtons = () => {
    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
    previousButton.disabled = track.scrollLeft <= 2;
    nextButton.disabled = track.scrollLeft >= maxScrollLeft - 2;
  };

  previousButton.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);

  if ("ResizeObserver" in window) {
    new ResizeObserver(updateButtons).observe(track);
  }

  requestAnimationFrame(updateButtons);
});
