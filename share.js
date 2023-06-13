function shareViaLine() {
    var currentURL = encodeURIComponent(window.location.href);
    var message = "Check out this page: " + currentURL;
    var lineShareURL = "https://line.me/R/msg/text/?" + (message);
    window.open(lineShareURL, "_blank");
  }
  // Function to share via WhatsApp
function shareViaWhatsApp() {
    var currentURL = encodeURIComponent(window.location.href);
    var message = "Check out this page: " + currentURL;
    var whatsappShareURL = "https://wa.me/?text=" + (message);
    window.open(whatsappShareURL, "_blank");
  }
  // Attach event listeners to the sharing buttons
document.getElementById("line-share").addEventListener("click", shareViaLine);
document.getElementById("whatsapp-share").addEventListener("click", shareViaWhatsApp);