// Form Validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        if (!name || !email || !message) {
            showFormError('Please fill in all fields');
            return;
        }
        
        if (!validateEmail(email)) {
            showFormError('Please enter a valid email address');
            return;
        }
        
        // Form submission success
        showFormSuccess('Thank you for your message! We will respond soon.');
        
        // Store contact in localStorage
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push({ name, email, message, date: new Date().toISOString() });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        
        // Reset form
        contactForm.reset();
    });
}

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show error message
function showFormError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    
    const existingError = document.querySelector('.form-error');
    if (existingError) existingError.remove();
    
    contactForm.prepend(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Show success message
function showFormSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.textContent = message;
    
    const existingSuccess = document.querySelector('.form-success');
    if (existingSuccess) existingSuccess.remove();
    
    contactForm.prepend(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Google Maps Embed (simulated)
function initMap() {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div class="map-fallback">
                <h3>Our Location</h3>
                <p>📍 123 Coffee Street, Portland, OR</p>
                <p>Hours: Mon-Fri 7am-7pm | Sat-Sun 8am-6pm</p>
                <p>Phone: (503) 555-1234</p>
            </div>
        `;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', initMap);