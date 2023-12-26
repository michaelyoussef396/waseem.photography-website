//contact form
const contactForm = document.getElementById('contact-Form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);
    const isValidPhone = phone.length >= 8;

    if (name && isValidEmail && isValidPhone && message) {
        alert(`Thank you, ${name}! I'll get in contact with you soon.`);
        contactForm.reset();
    }
});

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-bio h1, .about-resume', { origin: 'left' });
ScrollReveal().reveal('.home-bio p', { origin: 'right' });
ScrollReveal().reveal('.home-bio, heading', { origin: 'top' });
ScrollReveal().reveal('.about-items, .services-items, .work-items, form', { origin: 'bottom' });