const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


$(document).ready(function() {$('#myModal').modal('show');});


const scrollRevealOption = {
  origin: 'right',
  distance: '50px',
  duration: 800,
  easing: 'ease-out',
  opacity: 0,
  scale: 0.8
};

ScrollReveal().reveal('.nav_img img', {
  ...scrollRevealOption,
  delay: 400
});

ScrollReveal().reveal('.nav_img h3', {
  ...scrollRevealOption,
  delay: 800
});

ScrollReveal().reveal('.title h3', {
  ...scrollRevealOption,
  delay: 1200
});

ScrollReveal().reveal('.nav__links li', {
  ...scrollRevealOption,
  interval: 400,
  delay: 1600
});


ScrollReveal().reveal('.header__image', {
  origin: 'top',
  distance: '50px',
  duration: 3000,
  easing: 'ease-in-out',
  opacity: 0,
});

ScrollReveal().reveal('.header__content', {
  origin: 'bottom',
  distance: '50px',
  duration: 3000,
  easing: 'ease-in-out',
  opacity: 0,
});