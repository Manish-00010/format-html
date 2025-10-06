(function ($) {
  "use strict";
  var windowOn = $(window);
  // Preloader.js Start
  document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    // Hide preloader and show content after 3 seconds
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";

      // Show content and fade it in
      content.style.display = "block";
      setTimeout(() => {
        content.style.opacity = "1";
      }, 100); // small delay to trigger CSS transition
    }, 3000);
  });
  // Preloader.js End

  // Header jS Start
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;

    // Always fixed on mobile devices (width <= 767px)
    if (window.innerWidth <= 767) {
      header.classList.add("fixed");
      return;
    }

    // Scroll-based fix on tablets and desktops
    if (scrollPercent >= 10) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const overlay = document.getElementById("menuOverlay");
    const links = navMenu.querySelectorAll("a");

    // Toggle menu
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle.classList.toggle("open");
      navMenu.classList.toggle("show");
      overlay.classList.toggle("active");
    });

    // Close menu on link click
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        toggle.classList.remove("open");
        overlay.classList.remove("active");
      });
    });

    // Close menu if clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
        navMenu.classList.remove("show");
        toggle.classList.remove("open");
        overlay.classList.remove("active");
      }
    });

    // Optional: click overlay to close menu
    overlay.addEventListener("click", () => {
      navMenu.classList.remove("show");
      toggle.classList.remove("open");
      overlay.classList.remove("active");
    });
  });
  // Header jS End

  $(document).ready(function () {
    $(".get_inspired_slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 800,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
})(jQuery);
