document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.getElementById("scroll-to-recipes");
  const bestRecipesSection = document.getElementById("best-recipes");

  if (scrollButton && bestRecipesSection) {
    scrollButton.addEventListener("click", () => {
      bestRecipesSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});


