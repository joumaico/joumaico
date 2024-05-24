/**
 * Smooth scrolling functionality for navigation links.
 * This script listens for clicks on elements with the class `.nav-link`,
 * prevents the default anchor behavior, and smoothly scrolls to the target element
 * specified by the `data-target` attribute.
 */

// Select all elements with the class `.nav-link`
document.querySelectorAll(".nav-link").forEach((link) => {
  // Add a click event listener to each `.nav-link` element
  link.addEventListener("click", function (event) {
    // Prevent the default anchor behavior (e.g., jumping to the target)
    event.preventDefault();

    // Get the value of the `data-target` attribute from the clicked link
    const targetSection = this.getAttribute("data-target");

    // Find the target element using the `data-section` attribute
    const targetElement = document.querySelector(`[data-section="${targetSection}"]`);

    // Check if the target element exists
    if (targetElement) {
      // Scroll to the target element with an offset of 30 pixels from the top
      window.scrollTo({
        top: targetElement.offsetTop - 30, // Adjust the offset as needed
        behavior: "smooth", // Enable smooth scrolling
      });
    } else {
      // Log a warning if the target element is not found
      console.warn(`Target element with data-section="${targetSection}" not found.`);
    }
  });
});
