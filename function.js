// Function to handle the touch event outside the dropdown menu
function handleTouchOutside(event) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach((dropdown) => {
    if (!dropdown.parentNode.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });
}

// Event listener to detect click events outside the dropdown menu
document.addEventListener('click', handleTouchOutside, true);

// Event listener to detect touch events outside the dropdown menu
document.addEventListener('touchstart', handleTouchOutside, true);

// Function to toggle the display of the dropdown menu
function toggleDropdown(event) {
  const dropdown = event.currentTarget.nextElementSibling;
  const isHidden = dropdown.style.display === 'none';
  dropdown.style.display = isHidden ? 'block' : 'none';
}

// Event listener to toggle the display of the dropdown menu when the button is clicked or touched
const dropdownButtons = document.querySelectorAll('.dropbtn');
dropdownButtons.forEach((button) => {
  button.addEventListener('click', toggleDropdown);
  button.addEventListener('touchstart', toggleDropdown);
});
