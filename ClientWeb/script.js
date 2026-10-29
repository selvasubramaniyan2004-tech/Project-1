
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile menu open and close
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const company = document.getElementById("company").value.trim();
        const message = document.getElementById("message").value.trim();
        const status = document.getElementById("formStatus");

        const subject = encodeURIComponent("Website Business Enquiry");
        const body = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Company: " + company + "\n\n" +
            "Enquiry:\n" + message
        );

        // Replace this with the real company email
        const businessEmail = "REPLACE_WITH_COMPANY_EMAIL";

        if (businessEmail === "REPLACE_WITH_COMPANY_EMAIL") {
            status.textContent =
                "Demo only: add the real company email to activate this step.";
            return;
        }

        status.textContent = "Opening your email application...";

        window.location.href =
            "mailto:" + businessEmail +
            "?subject=" + subject + "&body=" + body;
    });
}
