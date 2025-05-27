// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

// Today's Special Banner
function updateDailySpecial() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const specials = [
        "Caramel Latte - $4.99",
        "Cold Brew - $3.99",
        "Pumpkin Spice - $5.49",
        "Iced Matcha - $4.99",
        "Espresso Shot - $2.99",
        "Vanilla Cappuccino - $4.49",
        "Hazelnut Mocha - $5.99"
    ];
    
    const today = new Date().getDay();
    const banner = document.getElementById('daily-special');
    
    if (banner) {
        banner.textContent = `${days[today]}'s Special: ${specials[today]}`;
    }
}

// Lazy Load Images
const lazyLoadImages = () => {
    const lazyImages = document.querySelectorAll('img.lazy');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('lazy-loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
};

// Load user preference from localStorage
const loadUserPreference = () => {
    const savedPreference = localStorage.getItem('coffeePreference');
    if (savedPreference) {
        const preferenceDisplay = document.getElementById('user-preference');
        if (preferenceDisplay) {
            preferenceDisplay.textContent = `Your usual: ${savedPreference}`;
        }
    }
};

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    updateDailySpecial();
    lazyLoadImages();
    loadUserPreference();
});