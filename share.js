// Get the current URL
var currentURL = encodeURIComponent(window.location.href);

// Get the message to be shared
var message = "Check out this page: " + currentURL;

// Update the href attribute for Line sharing
document.getElementById("line-share").href = "https://line.me/R/msg/text/I wanted to share this with you!" + encodeURIComponent(message);