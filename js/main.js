const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const text = document.getElementById('message').value.trim();

    if (name === '' || email === '' || text === '') {
        message.textContent = 'Please fill in all fields.';
        message.style.color = 'red';
        return;
    }

    message.textContent = 'Thank you! Your message has been sent.';
    message.style.color = 'green';

    form.reset();
});



