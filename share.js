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
function shareWithEmail() {
    var subject = "Check out this website!";
    var body = "I wanted to share this website with you. Here's the link: " + window.location.href;
    var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
  }
  // Attach event listeners to the sharing buttons
document.getElementById("line-share").addEventListener("click", shareViaLine);
document.getElementById("whatsapp-share").addEventListener("click", shareViaWhatsApp);
document.shareWithEmail("Email-share").addEventListener("click", shareWithEmail);