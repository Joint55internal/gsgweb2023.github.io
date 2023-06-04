// Wait for the document to be fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Get all the dropdown buttons
    var dropdowns = document.getElementsByClassName("dropbtn");

    // Add a click event listener to each dropdown button
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", function() {
        // Toggle the display of the corresponding dropdown content
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }

    // Close the dropdown menus if user clicks outside
    window.addEventListener("click", function(event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdownContents = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdownContents.length; i++) {
          var openDropdown = dropdownContents[i];
          if (openDropdown.style.display === "block") {
            openDropdown.style.display = "none";
          }
        }
      }
    });
  });
