// BACK TO TOP
const toTop = document.querySelector(".back-top");

if (toTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 75) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });
}

// MOBILE NAVBAR
const burger = document.querySelector(".burger");
const sidebar = document.querySelector(".links");
const links = document.querySelectorAll(".links li a");

if (burger && sidebar) {
  burger.addEventListener("click", toggleSidebar);

  links.forEach(link => {
    link.addEventListener("click", toggleSidebar);
  });
}

function toggleSidebar() {
  sidebar.classList.toggle("show");
}


