// Injects the shared footer into any page that provides a #footer-placeholder
// element and sets the current year automatically.
(function renderFooter() {
  const container = document.getElementById('footer-placeholder');
  if (!container) return;

  container.innerHTML = `
    <footer class="footer bg-black footer-style-02">
      <div class="min-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 footer-left">
             
              <div class="widget">
                <a class="footer-logo" href="index.html"><img class="img-fluid" src="images/logo/white-soriso.jpg" width="100px" alt="logo"></a>
              </div>
              <div class="col-lg-12 col-md-12 mb-md-0 mb-4 mt-4">
                  <div class="widget widget-social">
                    <h5 class="widget-title">Follow us</h5>
                    <div class="social-icon social-icon-style-02">
                      <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=61584772018112">Fb.</a></li>
                        <li><a href="https://www.instagram.com/sorisoceramic/">In.</a></li>
                        <li><a href="mailto:mail@sorisoceramic.com">Em.</a></li>
                        <li><a href="tel:9375074466">Ph.</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            
            <div class="col-xl-9 footer-right">
              <div class="row footer-right-top">
                <div class="col-lg-7 col-md-7 mb-4 mb-md-0">
                  <div class="widget widget-address">
                    <h5 class="widget-title">Contact</h5>
                    <ul class="list-unstyled mb-0">
                      <li><span>Phone:</span> <a href="tel:9375074466">+91 9375074466</a></li>
                      <li><span>Email:</span> <a href="mailto:mail@sorisoceramic.com">mail@sorisoceramic.com</a></li>
                      <li>8-A, National Highway, Lakhdhirpur Road, Morbi - 363642 (Gujarat) INDIA.</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5">
                  <div class="widget widget-menu">
                    <h5 class="widget-title">Quick Links</h5>
                    <ul class="list-unstyled mb-0">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="export.html">Export</a></li>
                      <li><a href="catalogue.html">Catalogue</a></li>
                      <li><a href="contact-us.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row footer-right-bottom">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container-fluid">
          <div class="row align-items-center copyright text-center text-md-start">
            <div class="col-md-6 col-sm-5">
              <p class="mb-0">&copy; <span id="copyright-year"></span> <a href="https://www.cypersoft.com/">  Cypersoft,  </a>All Rights Reserved </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  const year = container.querySelector('#copyright-year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();

