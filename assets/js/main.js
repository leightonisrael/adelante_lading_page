// Menu Toggle
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

// Function for close the menu
function closeNavMenu() {
    navMenu.classList.remove('show');
}

// Open the select item of the menu
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Close when click on the X icon 
closeMenu.addEventListener('click', closeNavMenu);

// Close when click at any item of the menu
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
gsap.from('.home_description_2', {opacity: 0,duration: 1,delay: 1,y: 30,});
gsap.from('.home_text', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_img', { opacity: 0, duration: 1, delay: 1, y: 30 });


// Sooth moviment at the site when click

document.querySelectorAll('.nav_link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();  // Prevents default click behavior

      const href = this.getAttribute('href');

      // Ensures that the href starts with "#", which means it's an inner anchor
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


//Buttom to scroll up

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
