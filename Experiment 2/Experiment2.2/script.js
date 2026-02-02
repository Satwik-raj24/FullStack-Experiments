const products = [
    { id: 1, name: "Laptop", category: "electronics", price: "₹55000.00" },
    { id: 2, name: "Phone", category: "electronics", price: "₹30000.00" },
    { id: 3, name: "Shoes", category: "fashion", price: "₹2000.00" },
    { id: 4, name: "T-Shirt", category: "fashion", price: "₹800.00" },
    { id: 5, name: "Book", category: "education", price: "₹500.00" },
    { id: 6, name: "Watch", category: "fashion", price: "₹3500.00" },
    { id: 7, name: "Tablet", category: "electronics", price: "₹25000.00" },
    { id: 8, name: "Backpack", category: "education", price: "₹1500.00" }
];

const productGrid = document.getElementById('product-grid');
const categoryFilter = document.getElementById('category-filter');

function renderProducts(filter = "all") {
    productGrid.innerHTML = '';

    products.forEach(product => {
        if (filter === "all" || product.category === filter) {
            const card = document.createElement('div');
            card.classList.add('product-card');

            card.innerHTML = `
                <div class="product-name">${product.name}</div>
                <div class="product-category">Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <div class="product-price">Price: ${product.price}</div>
            `;

            productGrid.appendChild(card);
        }
    });
}

// Initial Render
renderProducts();

// Filter Change Event
categoryFilter.addEventListener('change', (e) => {
    renderProducts(e.target.value);
});
