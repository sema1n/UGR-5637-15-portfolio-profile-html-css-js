document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu_icon");
  const navMenu = document.getElementById("nav-menu");
  const toggler = document.querySelector(".toggler");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-item");
  const projectsTabBtns = document.querySelectorAll(".projects-tab-btn");
  const projectsItems = document.querySelectorAll(".projects-item");

  // Toggle navbar visibility
  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  } else {
    console.error("Menu icon or nav menu element does not exist in the DOM.");
  }

  // Show and hide navbar in mobile
  if (toggler && navLinks) {
    toggler.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
    });
  } else {
    console.error("Toggler or navLinks element does not exist in the DOM.");
  }

  // Add active class on click to nav items
  if (navItems.length > 0) {
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navItems.forEach((i) => i.classList.remove("nav-item-active"));
        this.classList.add("nav-item-active");
        navLinks.classList.toggle("nav-active");
      });
    });
  } else {
    console.error("No nav items found in the DOM.");
  }

  // Open certificate
  function openCertificate(certType) {
    const certificates = {
      dataAnalytics: "images/certificate-1.png",
      programmingLanguages: "images/certificate-2.png",
    };

    if (certificates[certType]) {
      window.open(certificates[certType], "_blank");
    } else {
      alert("Certificate not available");
    }
  }

  // Filter projects
  if (projectsTabBtns.length > 0 && projectsItems.length > 0) {
    projectsTabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        projectsTabBtns.forEach((btn) =>
          btn.classList.remove("projects-tab-btn-active")
        );

        this.classList.add("projects-tab-btn-active");

        projectsItems.forEach((item) => {
          if (item.classList.contains(btn.id)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });
  } else {
    console.error("No project buttons or items found in the DOM.");
  }
});
