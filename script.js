// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= TYPEWRITER (HOME TITLE) =================

const typedTextEl = document.getElementById("typedText");

if (typedTextEl) {

    const fullText = typedTextEl.textContent.trim();
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 90;
    const deletingSpeed = 45;
    const pauseAfterType = 1800;
    const pauseAfterDelete = 500;

    function typeLoop() {

        if (!isDeleting) {
            charIndex++;
            typedTextEl.textContent = fullText.substring(0, charIndex);

            if (charIndex === fullText.length) {
                isDeleting = true;
                setTimeout(typeLoop, pauseAfterType);
                return;
            }

            setTimeout(typeLoop, typingSpeed);

        } else {
            charIndex--;
            typedTextEl.textContent = fullText.substring(0, charIndex);

            if (charIndex === 0) {
                isDeleting = false;
                setTimeout(typeLoop, pauseAfterDelete);
                return;
            }

            setTimeout(typeLoop, deletingSpeed);
        }
    }

    typedTextEl.textContent = "";
    setTimeout(typeLoop, 400);
}


// ================= SCROLL TO TOP =================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});
