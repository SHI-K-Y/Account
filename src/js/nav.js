function initializeNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navOverlay = document.querySelector(".nav-overlay");

  menuToggle?.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");
  });

  navOverlay?.addEventListener("click", function () {
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", initializeNavigation);
