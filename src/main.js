document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    const icon = item.querySelector("i");
    if (item.classList.contains("active")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });
});

document.querySelector(".mobile-menu-toggle").addEventListener("click", () => {
  document.querySelector(".mobile-nav").classList.toggle("active");
  const icon = document.querySelector(".mobile-menu-toggle i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".mobile-nav").classList.remove("active");
    const icon = document.querySelector(".mobile-menu-toggle i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  });
});
