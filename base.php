<!DOCTYPE html>
<html>
<head>
    <link rel="icon" href="slogo2.png" type="image/x-icon">
    <title><?php echo $pageTitle; ?></title>
    <!-- Add your common CSS and JavaScript files here -->
    <title>Ukraine GSG Website</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: url("news.png") no-repeat center center fixed;
      background-size: cover;
    }
    
    .header {
      background-color: #000000;
      color: #fff;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
    }
    
    .logo {
      height: 120px; /* Adjust the height as desired */
      width: auto; /* The width will adjust proportionally based on the height */
    }
    
    .header-text {
      flex-grow: 1;
      margin: 0;
      text-align: center;
      font-size: 34px;
    }
    
    .header-links {
      line-height: 120px; /* Adjust the line height to vertically center the links with the logo */
    }
    
    .header-links a {
      color: #fff;
      text-decoration: none;
      margin-left: 0px;
      margin-right: 60px;
    }
    
    .content {
      text-align: left;
      padding: 20px;
      margin: 160px auto 20px; /* Adjust the top and bottom margin to create space for the fixed header */
      max-width: 800px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    .content2 {
      text-align: left;
      padding: 20px;
      margin: 20px auto 20px; /* Adjust the top and bottom margin to create space for the fixed header */
      max-width: 800px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
    
    .footer {
      background-color: #005bb5;
      color: #fff;
      padding: 10px;
      text-align: center;
    }
    
    .dropdown-row {
      display: flex;
      justify-content: center;
      background-color: #000000;
      padding: 10px;
      position: sticky;
      top: 120px; /* Adjust the top position to match the logo height */
      z-index: 998; /* Dropdown is above the content */
    }
    
    .dropdown {
      position: relative;
      display: inline-block;
      margin-right: 10px; /* Add some spacing between the dropdown buttons */
    }
    
    .dropbtn {
      background-color: #000000;
      color: #fff;
      padding: 10px;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }
    
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    
    .dropdown-content a {
      color: #000;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    
    .dropdown:hover .dropdown-content {
      display: block;
    }
    
    .marker {
      background-color: yellow;
      padding: 2px 4px;
      color: #000;
      text-decoration: underline;
    }
    .blank-part {
      height: 200px; /* Adjust the height as desired */
    }
  </style>
<script src="./function.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QT60QMQ9CT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QT60QMQ9CT');
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script>
    $(document).ready(function() {
      var consentCookie = localStorage.getItem('cookieConsent');
      if (!consentCookie) {
        $('.cookie-banner').fadeIn();
      }
    });

    function acceptCookies() {
      $('.cookie-banner').fadeOut();
      localStorage.setItem('cookieConsent', true);
    }
  </script>
  <style>
    .cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #000;
      color: #fff;
      padding: 10px;
      text-align: center;
      display: none;
    }

    .cookie-banner button {
      background-color: #f1d600;
      color: #000;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
  </style> 
</head>
<body>
    <div class="header">
        <a href="./"><img src="gsglogo.png" alt="Logo" class="logo"></a>
        <h1 class="header-text"></h1>
        <div class="header-links">
          <div class="dropdown">
             <button class="dropbtn">///</button>
                 <div class="dropdown-content">
                    <a href="./">EN</a>
                    <a href="./de">DE</a>
                    <a href="./about">InFo</a>            
                  </div>
                </div>
              </div>
            </div>
          </div>
      <div class="dropdown-row">
        <div class="dropdown">
          <button class="dropbtn">Menu</button>
          <div class="dropdown-content">
            <a href="./">Home</a>
            <a href="./about">About</a>
            <a href="./announce">Announcement</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">News</button>
          <div class="dropdown-content">
            <a href="./news">News</a>
            <a href="./press">Press Release</a>
          </div>
        </div>
      </div>
    <main>
        <?php echo $pageContent; ?>
    </main>

    <footer>
        <!-- Add your footer content here -->
    <div class="footer">
    <p>Kyiv, Ukraine</p>
    <p>©️2023 Ukraine2023GSG</p>
  </div>
  <div class="cookie-banner">
    This website uses cookies to ensure you get the best experience. By using this website, you agree to our <a href="./cok">cookie policy</a>.
    <button onclick="acceptCookies()">Got it!</button>
  </div>
</body>
</html>