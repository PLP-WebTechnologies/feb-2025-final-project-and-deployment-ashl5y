let cartCount = localStorage.getItem('cartCount') || 0;
const cartCountEl = document.getElementById('cart-count');
if (cartCountEl) {
    cartCountEl.textContent = cartCount;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        if (cartCountEl) {
            cartCountEl.textContent = cartCount;
        }
        alert('Added to cart!');
    });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name && email && message) {
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
            contactForm.reset();
        }
    });
}

