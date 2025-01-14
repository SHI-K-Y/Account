document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navOverlay = document.querySelector(".nav-overlay");
  const content = document.querySelector(".content-wrapper");

  function toggleMenu() {
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
  }

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  navOverlay.addEventListener("click", toggleMenu);

  const navItems = document.querySelectorAll(".nav-item a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      navOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  const editBtns = document.querySelectorAll(".edit-btn");
  const modal = document.getElementById("editModal");
  const modalOverlay = document.querySelector(".modal-overlay");

  editBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      modal.classList.add("active");
    });
  });

  if (modal) {
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  const typeBtns = document.querySelectorAll(".type-btn");
  typeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      typeBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
