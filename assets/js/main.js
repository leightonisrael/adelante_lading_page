// Favicon Dark/Light Mode
const faviconTag = document.getElementById('favicon_tag');
const isDark = window.matchMedia('(prefers-color-scheme: dark)');
const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = '../../adl.svg';
  else faviconTag.href = '../../adl.svg';
};
changeFavicon();
setInterval(changeFavicon, 1000);

// Menu Toggle
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

// Função para fechar o menu
function closeNavMenu() {
    navMenu.classList.remove('show');
}

// Abre o menu quando o ícone de menu é clicado
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Fecha o menu quando o ícone de fechar é clicado
closeMenu.addEventListener('click', closeNavMenu);

// Fecha o menu quando qualquer link dentro do menu é clicado
const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(link => {
    link.addEventListener('click', closeNavMenu);
});


// IMG Hover Effect 3D
document.addEventListener('mousemove', move);
function move(e) {
  this.querySelectorAll('.move').forEach((layer) => {
    const speed = layer.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 170;
    const y = (window.innerHeight - e.pageY * speed) / 170;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// Animation GSAP
gsap.from('.nav_logo, .nav_toggle', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 10,
});
gsap.from('.nav_item', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.2,
});

gsap.from('.home_title', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_description', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_description_2', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
});
gsap.from('.home_text', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_buy', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_learn', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_img', { opacity: 0, duration: 1, delay: 1, y: 30 });


document.querySelectorAll('.nav_link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();  // Previne o comportamento padrão de clique

      const href = this.getAttribute('href');

      // Garante que o href começa com "#", o que significa que é uma âncora interna
      if (href.startsWith("#")) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
              const top = targetElement.offsetTop;
              window.scrollTo({
                  top: top,
                  behavior: 'smooth'
              });
          }
      }
  });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) { // Mostra o botão depois de rolar 100px
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
