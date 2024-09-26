// Get the nav toggle button and the nav items
const navToggle = document.getElementById('nav-toggle');
const navItems = document.getElementById('nav-items');

// Add an event listener to the nav toggle button
navToggle.addEventListener('click', () => {
    // Toggle the display of the nav items
    navItems.style.display = navItems.style.display === 'block' ? 'none' : 'block';
});

// Add an event listener to the window to close the nav items when the window is resized
window.addEventListener('resize', () => {
    // If the window width is greater than 768px, hide the nav items
    if (window.innerWidth > 768) {
        navItems.style.display = 'none';
    }
});

// Add an event listener to the hero button
const heroButton = document.querySelector('.hero button');
heroButton.addEventListener('click', () => {
    // Scroll to the next section (you can modify this to scroll to a specific section)
    const nextSection = document.querySelector('main section:nth-child(2)');
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

// Add an event listener to the social media links
const socialMediaLinks = document.querySelectorAll('.social-media a');
socialMediaLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Prevent the default link behavior
        event.preventDefault();
        // Open the link in a new tab
        window.open(link.href, '_blank');
    });
});