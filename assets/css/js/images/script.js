document.addEventListener("DOMContentLoaded", () => {
    // Enquiry Form Validation & AJAX Simulation
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function(e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById("fullName");
            const email = document.getElementById("email");
            const type = document.getElementById("enquiryType");
            const message = document.getElementById("message");

            // Reset errors
            document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

            if (name.value.trim() === "") {
                document.getElementById("nameError").textContent = "Full name is required.";
                isValid = false;
            }
            if (email.value.trim() === "" || !email.value.includes("@")) {
                document.getElementById("emailError").textContent = "Valid email is required.";
                isValid = false;
            }
            if (type.value === "") {
                document.getElementById("typeError").textContent = "Please select an enquiry category.";
                isValid = false;
            }
            if (message.value.trim().length < 10) {
                document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
                isValid = false;
            }

            if (isValid) {
                // Simulated AJAX submission response related to cost/availability
                const responseDiv = document.getElementById("responseMessage");
                responseDiv.className = "success-box";
                responseDiv.innerHTML = `Thank you, ${name.value}! Your ${type.value} enquiry has been processed successfully. Our standard availability and pricing estimates have been dispatched to ${email.value}.`;
                enquiryForm.reset();
            }
        });
    }

    // Contact Form Validation & Mailto Compiler
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            let isValid = true;

            const cName = document.getElementById("contactName");
            const cEmail = document.getElementById("contactEmail");
            const cMessage = document.getElementById("fullMessage");

            document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

            if (cName.value.trim() === "") {
                document.getElementById("contactNameError").textContent = "Name is required.";
                isValid = false;
            }
            if (cEmail.value.trim() === "" || !cEmail.value.includes("@")) {
                document.getElementById("contactEmailError").textContent = "Valid email is required.";
                isValid = false;
            }
            if (cMessage.value.trim() === "") {
                document.getElementById("fullMessageError").textContent = "Message cannot be empty.";
                isValid = false;
            }

            if (isValid) {
                // Compile into mailto schema as specified in project parameters
                const recipient = "support@organization.com";
                const subject = encodeURIComponent(`General Contact from ${cName.value}`);
                const body = encodeURIComponent(`Name: ${cName.value}\nEmail: ${cEmail.value}\n\nMessage:\n${cMessage.value}`);
                
                window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
            }
        });
    }
});
