/* =========================================================
   SWIFTSHIP
   Logistics & Delivery Website Template
   Main JavaScript
   ========================================================= */


/* =========================================================
   COMPANY SETTINGS
   Change these values when customizing the template.
   ========================================================= */

const SWIFTSHIP_CONFIG = {

  email: "hello@swiftship.com",

  whatsapp: "",

  companyName: "SwiftShip"

};


/* =========================================================
   MAIN
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
     REQUEST A QUOTE
     Opens the customer's configured email application.
     ======================================================= */

  const quoteForm = document.getElementById("quoteForm");
  const formMessage = document.getElementById("formMessage");

  if (quoteForm && formMessage) {

    quoteForm.addEventListener("submit", (event) => {

      event.preventDefault();


      const formData = new FormData(quoteForm);


      const name =
        String(formData.get("sender_name") || "").trim();

      const email =
        String(formData.get("email") || "").trim();

      const service =
        String(formData.get("service") || "").trim();


      if (!name || !email || !service) {

        formMessage.textContent =
          "Please complete all required fields.";

        return;

      }


      const subject =
        encodeURIComponent(
          `${SWIFTSHIP_CONFIG.companyName} Quote Request — ${name}`
        );


      const body =
        encodeURIComponent(

          `Name: ${name}\n` +

          `Email: ${email}\n` +

          `Phone: ${
            formData.get("phone") || "Not provided"
          }\n` +

          `Service: ${service}\n` +

          `Pickup Location: ${
            formData.get("origin") || "Not provided"
          }\n` +

          `Destination: ${
            formData.get("destination") || "Not provided"
          }\n` +

          `Shipment Details: ${
            formData.get("shipment_details") || "Not provided"
          }`

        );


      const mailtoLink =
        `mailto:${SWIFTSHIP_CONFIG.email}` +
        `?subject=${subject}` +
        `&body=${body}`;


      window.location.href = mailtoLink;


      formMessage.textContent =
        "Your email app is opening with the quote request.";

    });

  }

});
