document.addEventListener("DOMContentLoaded", () => {
const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");
const projectsTabBtns = document.querySelectorAll(".projects-tab-btn");
const projectsItems = document.querySelectorAll(".projects-item");

// show and hide navbar in mobile
 if (toggler) {
    toggler.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
    });
  } else {
    console.error("The toggler element does not exist in the DOM.");
  }
// add active class on click to nav-items
navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((i) => i.classList.remove("nav-item-active"));
      this.classList.add("nav-item-active");
    navLinks.classList.toggle("nav-active");
    });
  }); 
  function openCertificate(certType) {
    const certificates = {
      dataAnalytics: 'images/certificate-1.png',
      programmingLanguages: 'images/certificate-2.png'
    };
  
    // Option 1: Redirect to certificate URL
    if (certificates[certType]) {
      window.open(certificates[certType], '_blank');
    } else {
      alert('Certificate not available');
    }
  }
   
  // filter projects
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
  })
