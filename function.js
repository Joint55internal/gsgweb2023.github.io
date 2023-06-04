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
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }
  
  // Event listener to toggle the display of the dropdown menu when the button is clicked
  const dropdownButtons = document.querySelectorAll('.dropbtn');
  dropdownButtons.forEach((button) => {
    button.addEventListener('click', toggleDropdown);
  });
  