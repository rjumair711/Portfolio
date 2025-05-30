function toggleMenu() {
    let navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// Get all the navigation links within your menu
let navLinkItems = document.querySelectorAll('#navLinks a');

// Loop through each link and add a click event listener
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        // Hide the navigation menu
        let navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('show'); // Use remove('show') to ensure it hides
    });
});