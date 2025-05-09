function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pagination = document.getElementById('pagination');

let slideIndex = 0;
const totalProjects = document.querySelectorAll('.project-card').length;
const projectsPerView = 3;
const totalPages = Math.ceil(totalProjects / projectsPerView);

// Create pagination dots
for (let i = 0; i < totalPages; i++) {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => moveToSlide(i));
  pagination.appendChild(dot);
}

updatePagination();

// Move slider
function moveToSlide(index) {
  slideIndex = index;
  const offset = -(slideIndex * 100);
  slider.style.transform = `translateX(${offset}%)`;
  updatePagination();
}

// Next / Prev buttons
nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalPages;
  moveToSlide(slideIndex);
});

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalPages) % totalPages;
  moveToSlide(slideIndex);
});

function updatePagination() {
  const dots = pagination.querySelectorAll('span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % totalPages;
  moveToSlide(slideIndex);
}, 7000);
