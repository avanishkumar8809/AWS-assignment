/*

    Tooplate 2168 Sweet Bakery

    https://www.tooplate.com/view/2168-sweet-bakery

    Free HTML CSS Template

*/

// Mobile Menu Toggle
function toggleMenu() {
   const nav = document.getElementById('mainNav');
   const toggle = document.querySelector('.menu-toggle');
   nav.classList.toggle('active');
   toggle.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
   link.addEventListener('click', function () {
      const nav = document.getElementById('mainNav');
      const toggle = document.querySelector('.menu-toggle');
      nav.classList.remove('active');
      toggle.classList.remove('active');
   });
});

// Highlight active menu item on scroll
window.addEventListener('scroll', function () {
   const sections = document.querySelectorAll('section[id]');
   const navLinks = document.querySelectorAll('nav a');

   let current = '';

   sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
         current = section.getAttribute('id');
      }
   });

   navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
         link.classList.add('active');
      }
   });
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
         target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
   });
});

// Countdown Timer - Calculate end date ONCE when page loads

// OPTION 1: Fixed end date (Use this for real campaigns)
// const countdownEndDate = new Date('2026-12-20 23:59:59'); // Set your specific end date here

// OPTION 2: Auto-reset - Always 6 days 5 hours 40 minutes from now (Use this for template preview/demo)
const now = new Date();
const countdownEndDate = new Date(
   now.getTime() +
   (6 * 24 * 60 * 60 * 1000) + // 6 days
   (5 * 60 * 60 * 1000) + // 5 hours
   (40 * 60 * 1000) // 40 minutes
);

function updateCountdown() {
   const now = new Date();
   const diff = countdownEndDate - now;

   // If countdown is finished, you can reset or show a message
   if (diff <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
   }

   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
   const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((diff % (1000 * 60)) / 1000);

   document.getElementById('days').textContent = String(days).padStart(2, '0');
   document.getElementById('hours').textContent = String(hours).padStart(2, '0');
   document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
   document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Hero Graphics Rotation
let currentGraphic = 0;
const graphics = document.querySelectorAll('.hero-illustration');
const totalGraphics = graphics.length;

function rotateGraphics() {
   // Fade out current
   graphics[currentGraphic].classList.remove('active');

   // Move to next graphic
   currentGraphic = (currentGraphic + 1) % totalGraphics;

   // Fade in next
   graphics[currentGraphic].classList.add('active');
}

// Rotate every 3 seconds
setInterval(rotateGraphics, 3000);