let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const carousel = document.querySelector('.carousel');
const navLinks = document.querySelectorAll('nav a');
const indicators = document.querySelectorAll('.indicator');
const container = document.querySelector('.carousel-container');
let isScrolling = false;
let galleryAnimated = false;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateIndicators();
  const images = document.querySelectorAll('.gallery-image');
  
  if (currentSlide === 2) {
    if (!galleryAnimated) {
      images.forEach(img => img.classList.add('animate'));
      galleryAnimated = true;
    } else {
      images.forEach(img => img.style.opacity = '1');
    }
  } else {
    images.forEach(img => img.style.opacity = '0');
  }
}

function updateIndicators() {
  indicators.forEach(ind => ind.classList.remove('active'));
  indicators[currentSlide].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateCarousel();
  }
});
document.getElementById('prev').addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    currentSlide = parseInt(link.getAttribute('data-slide'));
    updateCarousel();
  });
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    currentSlide = parseInt(indicator.getAttribute('data-slide'));
    updateCarousel();
  });
});

// Scroll event to change slides (debounced)
container.addEventListener('wheel', e => {
  if(isScrolling) return;
  isScrolling = true;
  if(e.deltaY > 0){
    if(currentSlide < totalSlides - 1) currentSlide++;
  } else {
    if(currentSlide > 0) currentSlide--;
  }
  updateCarousel();
  setTimeout(()=> isScrolling = false, 800);
});

// Keydown events for arrow keys
document.addEventListener('keydown', e => {
  if(e.key === 'ArrowRight'){
    if(currentSlide < totalSlides - 1){
      currentSlide++;
      updateCarousel();
    }
  }
  if(e.key === 'ArrowLeft'){
    if(currentSlide > 0){
      currentSlide--;
      updateCarousel();
    }
  }
});

// q2
function logEvent(eventType, eventObject) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}, ${eventType}, ${eventObject}`);
}

document.addEventListener('click', (event) => {
  const target = event.target;
  let eventObject = target.tagName.toLowerCase();

  if (target.classList.length > 0) {
    eventObject += `.${Array.from(target.classList).join('.')}`;
  }

  logEvent('click', eventObject);
});

window.addEventListener('load', () => {
  logEvent('view', 'page');
});