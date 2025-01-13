document.addEventListener("DOMContentLoaded", function () {
  // 導航選單切換
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

  // 點擊導覽項目時關閉選單（在手機版）
  const navItems = document.querySelectorAll(".nav-item a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });

  // 監聽視窗大小變化
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      navOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // 類別編輯模態框
  const editBtns = document.querySelectorAll(".edit-btn");
  const modal = document.getElementById("editModal");
  const modalOverlay = document.querySelector(".modal-overlay");

  editBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      modal.classList.add("active");
    });
  });

  // 關閉模態框
  if (modal) {
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  // 交易類型切換
  const typeBtns = document.querySelectorAll(".type-btn");
  typeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      typeBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
