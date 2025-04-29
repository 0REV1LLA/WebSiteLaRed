const images = document.querySelectorAll('.gallery img');
const buttons = document.querySelectorAll('.view-button');
const overlay = document.getElementById('imageOverlay');
const overlayImg = overlay.querySelector('img');

const hoverTimers = new Map();

function darkenOthers(exceptImage) {
  images.forEach(img => {
    if (img !== exceptImage) img.classList.add('dimmed');
  });
}

function clearDarkening(exceptImage) {
  clearTimeout(hoverTimers.get(exceptImage));
  hoverTimers.delete(exceptImage);
  images.forEach(img => img.classList.remove('dimmed'));
}

images.forEach((image, index) => {
  image.addEventListener('mouseenter', () => {
    const timer = setTimeout(() => {
      darkenOthers(image);
    }, 300);
    hoverTimers.set(image, timer);
  });

  image.addEventListener('mouseleave', () => {
    clearDarkening(image);
  });
});

buttons.forEach((button, index) => {
  const image = images[index];

  button.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimers.get(image)); // Cancelar si hay un delay activo
    darkenOthers(image); // Activar de inmediato
  });

  button.addEventListener('mouseleave', () => {
    clearDarkening(image);
  });

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    overlayImg.src = image.src;
    overlay.classList.add('visible');
  });
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('visible');
  setTimeout(() => {
    overlayImg.src = '';
  }, 400);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    overlay.classList.remove('visible');
    setTimeout(() => {
      overlayImg.src = '';
    }, 400);
  }
});

//* *// //* *// //* *// //* *// //* *// //* *// //* *// 

document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector('.nav__menu__btn');
  const navLinks = document.querySelector('.nav__links');

  menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('open'); // Alterna la clase 'open' en el menú
  });
});

//* *// //* *// //* *// //* *// //* *// //* *// //* *// 

ScrollReveal().reveal('.image-container', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.nav__links a', {
  delay: 500,
  origin: 'top',
  distance: '50px',
  duration: 1200,
  easing: 'ease-in-out'
});