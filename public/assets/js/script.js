const navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav .nav-link ul a");

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 150;

    if (
      scrollTop >= sectionTop &&
      scrollTop < sectionTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      let id = section.getAttribute("id");
      document
        .querySelector(`nav .nav-link ul a[href*="${id}"]`)
        .classList.add("active");
    }
  });
});

if (
  window.location.pathname === "/public/index.html" ||
  window.location.pathname === "/public/product.html" ||
  window.location.pathname === "/public/about.html" ||
  window.location.pathname === "/public/news.html" ||
  window.location.pathname === "/public/contact.html"
) {
  window.location.href = "/public/error.html";
}
