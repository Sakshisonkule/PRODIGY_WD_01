// Get the navbar element
const navbar = document.getElementById("navbar");

// Function to add sticky class when scrolling
function stickyNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Add event listener for scrolling
window.addEventListener("scroll", stickyNavbar);
