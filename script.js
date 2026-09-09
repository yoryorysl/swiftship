/* =========================================================
   SWIFTSHIP
   Logistics & Delivery Website Template
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

    });


    mainNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open navigation"
        );

      });

    });

  }


  /* =======================================================
     QUOTE FORM
     Frontend-ready form handling
     ======================================================= */

  const quoteForm = document.getElementById("quoteForm");
  const formMessage = document.getElementById("formMessage");

  if (quoteForm && formMessage) {

    quoteForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const formData = new FormData(quoteForm);

      const name = formData.get("sender_name");
      const email = formData.get("email");
      const service = formData.get("service");

      if (!name || !email || !service) {

        formMessage.textContent =
          "Please complete all required fields.";

        return;
      }


      formMessage.textContent =
        "Thank you. Your quote request has been prepared successfully.";


      quoteForm.reset();

    });

  }


});
