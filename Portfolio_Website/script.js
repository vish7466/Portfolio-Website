// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Highlight Active Section on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Adjust for fixed navbar height

    sections.forEach(section => {
        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            if (activeLink) {
                document.querySelectorAll('a.nav-links a').forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }
        }
    });
});

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
  
    // Check Local Storage for Saved Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
      if (savedTheme === 'dark-mode') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
  
    // Toggle Theme on Click
    toggle.addEventListener('click', () => {
      const isDarkMode = body.classList.toggle('dark-mode');
  
      // Update Icon
      themeIcon.classList.toggle('fa-sun', !isDarkMode);
      themeIcon.classList.toggle('fa-moon', isDarkMode);
  
      // Save Theme to Local Storage
      localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
    });
  });
// Search Bar Functionality
// Placeholder function for search action
function openContactForm() {
    alert("Search functionality is under construction!");
}
const searchBar = document.querySelector('.search-bar');
const portfolioItems = document.querySelectorAll('.portfolio-item');

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    portfolioItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Contact Form Validation
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        e.preventDefault();
        alert('All fields are required!');
    } else if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
