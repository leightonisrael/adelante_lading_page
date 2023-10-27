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

gsap.registerPlugin(ScrollTrigger);

// Animation GSAP
gsap.from('.carousel-btn carousel-btn-next', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 10,
});

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


gsap.from('#scrollToTopBtn', {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.2,
});
gsap.from('.about', {
    opacity: 0,
    duration: 1,
    y: 10,
    scrollTrigger: {
      trigger: '.about',
      start: 'top 70%',
      toggleActions: "play none none none"
    }
});

gsap.from('.contact', {
    opacity: 0,
    duration: 2,
    y: 10,
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 70%',
      toggleActions: "play none none none"
    }
});
  


gsap.from('.home_title', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_description', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_description_2', {opacity: 0,duration: 1,delay: 1,y: 30,});
gsap.from('.home_text', { opacity: 0, duration: 1, delay: 1, y: 30 });
gsap.from('.home_img', { opacity: 0, duration: 1, delay: 1, y: 30 });
// gsap.from('.about', { opacity: 0, duration: 1, delay: 1, y: 30 });
// gsap.from('.about_description', { opacity: 0, duration: 1, delay: 1, y: 30 });
// gsap.from('.about_items', { opacity: 0, duration: 1, delay: 1, y: 30 });
// gsap.from('.contact', { opacity: 0, duration: 0.5, delay: 2,  y: 30 });


// Sooth moviment at the site when click

document.querySelectorAll('.nav_link').forEach(link => {
  link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Ensures that the href starts with "#", which means it's an inner anchor
      if (href.startsWith("#")) {
          e.preventDefault();  // Prevents default click behavior only for inner anchors
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


const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-btn-prev');
const nextBtn = document.querySelector('.carousel-btn-next');
let currentIndex = 0;
let autoMoveInterval;

function moveCarousel(newIndex) {
    if (newIndex < 0) newIndex = carouselInner.children.length - 1;
    if (newIndex >= carouselInner.children.length) newIndex = 0;

    const offset = -newIndex * 300; // 300 is the width of the image
    carouselInner.style.transform = `translateX(${offset}px)`;
    currentIndex = newIndex;
}

function startAutoMove() {
    autoMoveInterval = setInterval(() => {
        moveCarousel(currentIndex + 1);
    }, 3000); // moves every 3 seconds
}

function stopAutoMove() {
    clearInterval(autoMoveInterval);
}

// Starts automatic carousel movement
startAutoMove();

prevBtn.addEventListener('click', () => {
    stopAutoMove();
    moveCarousel(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    stopAutoMove();
    moveCarousel(currentIndex + 1);
});

//If you want to restart automatic movement after a certain time without interaction, you can do it like this:
let restartTimeout;
carouselInner.addEventListener('mouseenter', stopAutoMove);
carouselInner.addEventListener('mouseleave', () => {
    clearTimeout(restartTimeout);
    restartTimeout = setTimeout(startAutoMove, 5000); // restarts after 5 seconds of no interaction
});

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const images = document.querySelectorAll('.carousel-inner img');
const closeBtn = document.querySelector('.close');
const prevBtn1 = document.getElementById('prevBtn');
const nextBtn2 = document.getElementById('nextBtn');
const nav = document.querySelector('.nav');
let currentImageIndex;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        currentImageIndex = index;
        nav.style.display = "none";  // Hide the nav
    });
});

closeBtn.addEventListener('click', closeImageModal);

prevBtn1.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImageIndex].src;
});

nextBtn2.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImg.src = images[currentImageIndex].src;
});

// Functionality to close the modal when pressing the ESC key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeImageModal();
    }
});

function closeImageModal() {
    modal.style.display = "none";
    nav.style.display = "flex";  // Restore the nav display to flex
}


let indicator = document.getElementById('whatsapp-indicator');
let widget = document.getElementById('whatsapp-widget');

// Função para verificar se estamos em uma tela pequena (por exemplo, menos de 600px de largura).
function isSmallScreen() {
    return window.innerWidth <= 600;
}

indicator.addEventListener('mouseover', function() {
    if (!isSmallScreen()) {
        showWidget();
    }
});

indicator.addEventListener('click', function() {
    showWidget();
});

widget.addEventListener('mouseleave', function() {
    hideWidget();
});

document.addEventListener('click', function(event) {
    // Se o clique não foi dentro do widget ou do ícone, oculte o widget.
    if (!widget.contains(event.target) && !indicator.contains(event.target)) {
        hideWidget();
    }
});

function showWidget() {
    indicator.style.display = 'none';
    widget.classList.add('active');
}

function hideWidget() {
    widget.classList.remove('active');
    setTimeout(() => {
        indicator.style.display = 'flex';
    }, 300);
}


document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square');
    const displayImage = document.getElementById('display-image');
    const displayText = document.getElementById('display-text');
    let clickedSquare = null; // Armazena o quadrado que foi clicado

    function shrinkOthers(target) {
        squares.forEach(s => {
            if (s !== target) {
                s.classList.add('shrink');
            } else {
                s.classList.remove('shrink');
            }
        });
    }

    squares.forEach(square => {
        square.addEventListener('click', function() {
            const hiddenContent = this.querySelector('.hidden-content');
            const textContent = hiddenContent.innerHTML;

            if (clickedSquare === this) {
                // Se o quadrado já estava clicado, desative o clique, retorne todos ao tamanho normal e esconda tudo
                clickedSquare = null;
                squares.forEach(s => s.classList.remove('shrink'));
                displayImage.style.display = 'block'; // Mantenha a imagem original visível
                displayText.innerHTML = '';
            } else {
                // Se um novo quadrado foi clicado, atualize o quadrado clicado, encolha os outros e mostre o conteúdo
                clickedSquare = this;
                shrinkOthers(this);
                displayImage.style.display = 'none'; // Mantenha a imagem original oculta
                displayText.innerHTML = textContent;
            }
        });
    });
});








