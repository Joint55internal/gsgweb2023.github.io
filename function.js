// Function to handle the touch event outside the dropdown menu
function handleTouchOutside(event) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach((dropdown) => {
    if (!dropdown.parentNode.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });
}

// Event listener to detect touch events outside the dropdown menu
document.addEventListener('touchstart', handleTouchOutside, true);

// Function to toggle the display of the dropdown menu
function toggleDropdown(event) {
  const dropdown = event.currentTarget.nextElementSibling;
  const isDisplayed = dropdown.style.display === 'block';

  // Collapse all dropdown menus
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach((dropdown) => {
    dropdown.style.display = 'none';
  });

  // Toggle the display of the clicked dropdown menu
  dropdown.style.display = isDisplayed ? 'none' : 'block';
}

// Event listener to toggle the display of the dropdown menu when the button is clicked
const dropdownButtons = document.querySelectorAll('.dropbtn');
dropdownButtons.forEach((button) => {
  button.addEventListener('click', toggleDropdown);
});
