// Get the current URL
var currentURL = encodeURIComponent(window.location.href);

// Get the message to be shared
var message = "Check out this page: " + currentURL;

// Update the href attribute for Line sharing
document.getElementById("line-share").href = "https://line.me/R/msg/text/?" + encodeURIComponent(message);

// Update the href attribute for WhatsApp sharing
document.getElementById("whatsapp-share").href = "https://wa.me/?text=" + encodeURIComponent(message);
