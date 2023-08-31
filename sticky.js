// Get the navigation bar element
const navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add an event listener to the scroll event
window.addEventListener("scroll", () => {
  // Check if the current scroll position is greater than the offset position of the navbar
  if (window.pageYOffset > sticky) {
    // Add the sticky class to the navbar
    navbar.classList.add("sticky");
  } else {
    // Remove the sticky class from the navbar
    navbar.classList.remove("sticky");
  }
});

// Get the navigation bar element
const hc2 = document.querySelector(".header-container.v2");

// Get the offset position of the navbar
const sticky2 = navbar.offsetTop;

// Add an event listener to the scroll event
window.addEventListener("scroll", () => {
  // Check if the current scroll position is greater than the offset position of the navbar
  if (window.pageYOffset > sticky2) {
    // Add the sticky class to the navbar
    hc2.classList.add("sticky2");
  } else {
    // Remove the sticky class from the navbar
    hc2.classList.remove("sticky2");
  }
});
