// Burger menu

const navSlide = () => {
  const burger = document.querySelector('.burger_menu');
  const nav = document.querySelector('nav ul');
  const logo = document.querySelector('.logo');
  const main = document.querySelector('main');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    // Navigation Toggle
    if (nav.classList.toggle('nav_active')) {
      body.style.overflow = 'hidden';
      logo.style.color = '#FA6980';
      main.style.display = 'none';
      header.style.display = 'none';
      footer.style.display = 'block';
    } else {
      body.style.overflow = 'visible';
      logo.style.color = '#a6adb4';
      main.style.display = 'block';
      header.style.display = 'block';
      footer.style.display = 'none';
    }
  });
};

navSlide();
