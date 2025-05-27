// Coffee Data
const coffees = [
    { name: "Espresso", price: 2.99, type: "hot", desc: "Strong and concentrated" },
    { name: "Americano", price: 3.49, type: "hot", desc: "Espresso with hot water" },
    { name: "Latte", price: 4.49, type: "hot", desc: "Espresso with steamed milk" },
    { name: "Cappuccino", price: 4.29, type: "hot", desc: "Equal parts espresso, milk, and foam" },
    { name: "Iced Coffee", price: 3.99, type: "cold", desc: "Chilled coffee over ice" },
    { name: "Cold Brew", price: 4.49, type: "cold", desc: "Slow-steeped for 18 hours" },
    { name: "Iced Latte", price: 4.99, type: "cold", desc: "Espresso with cold milk over ice" },
    { name: "Mocha", price: 5.29, type: "hot", desc: "Espresso with chocolate and milk" }
];

// DOM Elements
const menuContainer = document.getElementById('menu-items');
const filterButtons = document.querySelectorAll('.filter-btn');

// Display Menu Function
function displayMenu(items) {
    menuContainer.innerHTML = items.map(coffee => `
        <div class="menu-item">
            <h3>${coffee.name}</h3>
            <p class="price">$${coffee.price.toFixed(2)}</p>
            <p class="desc">${coffee.desc}</p>
            <button class="order-btn" data-name="${coffee.name}">Order Now</button>
        </div>
    `).join('');
    
    // Add event listeners to order buttons
    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const coffeeName = e.target.dataset.name;
            localStorage.setItem('coffeePreference', coffeeName);
            
            // Show confirmation
            const confirmation = document.createElement('div');
            confirmation.className = 'order-confirmation';
            confirmation.textContent = `Added ${coffeeName} to your order!`;
            e.target.parentNode.appendChild(confirmation);
            
            // Remove after 3 seconds
            setTimeout(() => {
                confirmation.remove();
            }, 3000);
        });
    });
}

// Filter Menu
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        const filteredCoffees = filter === 'all' 
            ? coffees 
            : coffees.filter(coffee => coffee.type === filter);
        
        displayMenu(filteredCoffees);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayMenu(coffees);
});