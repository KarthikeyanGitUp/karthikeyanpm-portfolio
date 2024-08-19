var typed = new Typed(".text", {
    strings: ["Mendix Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Handle contact form submission
    const contactForm = document.querySelector(".contact-form form");
    const submitButton = contactForm.querySelector(".send");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('input[placeholder="Enter Your Name"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Enter Your Subject"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (!name || !email || !message) {
            alert("Please fill out all required fields.");
            return;
        }

        // Example 1: Sending message via WhatsApp
        const whatsappNumber = "6380538769"; // Replace with your WhatsApp number
        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        )}`;
        window.open(whatsappURL, "");

        // Example 2: Sending message via Email
        const mailtoURL = `mailto:karthikeyanpmbe@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
        window.location.href = mailtoURL;
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.querySelector(".top");

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
