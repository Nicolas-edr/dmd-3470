// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navSections = document.querySelector('.nav-sections');
  const navOverlay = document.querySelector('.nav-overlay');

  // Toggle mobile menu
  function toggleMobileMenu() {
    hamburgerMenu.classList.toggle('active');
    navSections.classList.toggle('active');
    navOverlay.classList.toggle('active');
  }

  // Event listeners
  hamburgerMenu.addEventListener('click', toggleMobileMenu);
  navOverlay.addEventListener('click', toggleMobileMenu);

  // Close menu when clicking on nav links
  const navLinks = document.querySelectorAll('.nav-sections .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });

  // Close menu on window resize if desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 767) {
      hamburgerMenu.classList.remove('active');
      navSections.classList.remove('active');
      navOverlay.classList.remove('active');
    }
  });
});