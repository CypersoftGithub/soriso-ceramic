// Injects the shared header and offcanvas navigation into any page that
// provides a #header-placeholder element.
(function renderHeader() {
  const container = document.getElementById('header-placeholder');
  if (!container) return;

  container.innerHTML = `
    <header class="header header-sticky">
      <nav class="navbar navbar-static-top navbar-expand-lg">
        <div class="container-fluid main-header position-relative">
          <a class="navbar-brand" href="index.html">
            <img class="img-fluid" src="images/logo/black-soriso.jpg" alt="logo">
          </a>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html"><span>Home</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about-us.html"><span>About Us</span></a>
              </li>
              <li class="dropdown nav-item">
                <a class="nav-link" href="javascript:void(0)" data-bs-toggle="dropdown">
                  Products <i class="bi bi-chevron-down"></i>
                </a>

                <div class="dropdown-menu p-3 products-mega">
                  <div class="row g-0">
                  
                    <!-- SIZE COLUMN -->
                    <div class="col-6 pe-3 border-end">
                      <h6 class="dropdown-title">Size</h6>
                      <ul class="list-unstyled">
                        <li><a class="dropdown-item" href="Collection.html?size=150x600">150x600</a></li>
                        <li><a class="dropdown-item" href="Collection.html?size=150x900">150x900</a></li>
                        <li><a class="dropdown-item" href="Collection.html?size=200x600">200x600</a></li>
                        <li><a class="dropdown-item" href="Collection.html?size=200x1000">200x1000</a></li>
                        <li><a class="dropdown-item" href="Collection.html?size=200x1200">200x1200</a></li>
                        <li><a class="dropdown-item" href="Collection.html?size=300x1200">300x1200</a></li>
                        <li><a class="dropdown-item" href="Collection.html?size=150x600">150x600 Chevron</a></li>
                      </ul>
                    </div>

                    <!-- SURFACE COLUMN -->
                    <div class="col-6 ps-3">
                      <h6 class="dropdown-title">Surface</h6>
                      <ul class="list-unstyled">
                        <li><a class="dropdown-item" href="Collection.html?surface=Regular Mattt">Regular Matt</a></li>
                        <li><a class="dropdown-item" href="Collection.html?surface=Hard Matt">Hard Matt</a></li>
                        <li><a class="dropdown-item" href="Collection.html?surface=r10">R10</a></li>
                        <li><a class="dropdown-item" href="Collection.html?surface=Digital Matt">Digital Matt</a></li>
                        <li><a class="dropdown-item" href="Collection.html?surface=Carving Mattt">Carving Matt</a></li>
                        <li><a class="dropdown-item" href="Collection.html?surface=Sugar">Sugar</a></li>
                        <li><a class="dropdown-item" href="Collection.html?surface=Metallic">Metallic</a></li>
                        <li><a class="dropdown-item" href="Collection.html?surface=Grit Granula">Grit Granula</a></li>
                        <li><a class="dropdown-item" href="Collection.html?surface=Digital Structured">Digital Structured</a></li>
                        <li><a class="dropdown-item" href="Collection.html?surface=S.P. Color">S.P. Color</a></li>
                      </ul>
                    </div>

                  </div>
                </div>
            </li>

              <li class="dropdown nav-item">
                <a class="nav-link" href="javascript:void(0)" data-bs-toggle="dropdown">Utilities<i class="bi bi-chevron-down"></i></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="Tile-Calculator.html"><span>Tile Calculator</span></a></li>
                  <li><a class="dropdown-item" href="Packing-Details.html"><span>Packing Details</span></a></li>
                  <li><a class="dropdown-item" href="Technical-Specifications.html"><span>Technical Specifications</span></a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="export.html"><span>Export</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="catalogue.html"><span>Catalogue</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact-us.html"><span>Contact us</span></a>
              </li>
            </ul>
          </div>
          <div class="nav-right">
            <div class="action-group"><a class="menu-btn hamburger" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <span class="hamburger-container">
                  <span class="hamburger-inner"></span>
                </span>
              </a>
              <div class="mobile-action d-block d-lg-none">
                <div class="mobile-hamburger">
                  <a class="hamburger" href="#" data-bs-toggle="offcanvas" data-bs-target="#menuOffcanvas" aria-controls="menuOffcanvas">
                    <span class="hamburger-container">
                      <span class="hamburger-inner"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="offcanvas main-menu-offcanvas offcanvas-end bg-dark" tabindex="-1" id="menuOffcanvas" aria-labelledby="menuOffcanvasLabel">
      <div class="offcanvas-header">
        <a id="menuOffcanvasLabel" class="navbar-brand" href="index.html"> <img class="img-fluid" src="images/logo/white-soriso.jpg" alt="Main logo"></a>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="../../../www.w3.org/2000/svg.html">
            <path d="M4.19995 25.5841L25.7999 3.98413" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.19995 3.98413L25.7999 25.5841" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="offcanvas-body lenis-scroll-disable">
        <div class="body-inner">
          <nav class="navbar">
            <ul class="nav navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html"><span>Home</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about-us.html"><span>About Us</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Collection.html"><span>Collection</span></a>
              </li>
              <li class="dropdown nav-item">
                <a class="nav-link" href="javascript:void(0)" data-bs-toggle="dropdown">Utilities<i class="bi bi-chevron-down"></i></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="Tile-Calculator.html"><span>Tile Calculator</span></a></li>
                  <li><a class="dropdown-item" href="Packing-Details.html"><span>Packing Details</span></a></li>
                  <li><a class="dropdown-item" href="Technical-Specifications.html"><span>Technical Specifications</span></a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="export.html"><span>Export</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="catalogue.html"><span>Catalogue</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact-us.html"><span>Contact Us</span></a>
              </li>
            </ul>
          </nav>
          <div class="bottom-info">
            <div class="contact-info">
              <span class="number">+91 9375074466</span>
              <a class="mail" href="#"><i class="fa-regular fa-envelope"></i>mail@sorisoceramic.com</a>
              <span class="text">Stay updated with the latest tile trends, new product launches, and exclusive offers from Soriso Ceramic.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="offcanvas offcanvas-end header-sidepanel bg-dark" tabindex="-1" id="offcanvasRight">
      <div class="offcanvas-header text-end justify-content-end">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="../../../www.w3.org/2000/svg.html">
            <path d="M4.19995 25.5841L25.7999 3.98413" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.19995 3.98413L25.7999 25.5841" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="offcanvas-body d-flex align-content-between flex-wrap justify-content-center lenis-scroll-disable">
        <div class="sidebar-menu">
          <div class="logo">
            <a href="index.html">
              <img class="img-fluid" src="images/logo/white-soriso.jpg" alt="Main logo">
            </a>
          </div>
          <div class="about-us-box">
            <h4 class="title mb-3">About us</h4>
            <p>Stay updated with the latest tile trends, new product launches, and exclusive offers from Soriso Ceramic.</p>
          </div>
          <div class="social-icon">
            <ul>
              <li class="title">Follow us</li>
              <li><a href="https://www.facebook.com/profile.php?id=61584772018112">Fb.</a></li>
              <li><a href="https://www.instagram.com/sorisoceramic/">In.</a></li>
              <li><a href="mailto:mail@sorisoceramic.com">Em.</a></li>
              <li><a href="tel:9375074466">Ph.</a></li>
            </ul>
          </div>
          <div class="contact-info-box">
            <h4 class="mb-3">Contact Info</h4>
            <p><a href="mailto:mail@sorisoceramic.com">mail@sorisoceramic.com</a></p>
            <p><a href="tel:9375074466">+91 9375074466</a></p>
          </div>
          <a href="contact-us.html" class="btn"><span>Get a Quote</span></a>
        </div>
      </div>
    </div>
  `;
})();

