const products = [
    {
        id: 1,
        name: "Wireless Noise-Canceling Headphones",
        category: "tech",
        price: "$299",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Mechanical Gaming Keyboard",
        category: "tech",
        price: "$149",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Premium Cotton T-Shirt",
        category: "fashion",
        price: "$35",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Modern Leather Watch",
        category: "fashion",
        price: "$199",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Minimalist Desk Lamp",
        category: "home",
        price: "$89",
        image: "https://images.unsplash.com/photo-1507473888900-52e1ad14592d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Smart Fitness Tracker",
        category: "lifestyle",
        price: "$129",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 7,
        name: " Ergonomic Office Chair",
        category: "home",
        price: "$450",
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Organic Green Tea Set",
        category: "lifestyle",
        price: "$45",
        image: "https://images.unsplash.com/photo-1564890369478-c5af469afff0?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 9,
        name: "Ultra-Wide Monitor",
        category: "tech",
        price: "$599",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 10,
        name: "Denim Jacket",
        category: "fashion",
        price: "$75",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1000&auto=format&fit=crop"
    }
];

const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResultsInfo = document.getElementById('no-results');

// Initial Render
renderProducts(products);

// Filter Event Listeners
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');
        
        const category = btn.dataset.filter;
        filterAndSearchProducts(category, searchInput.value);
    });
});

// Search Event Listener
searchInput.addEventListener('input', (e) => {
    const activeBtn = document.querySelector('.filter-btn.active');
    const category = activeBtn ? activeBtn.dataset.filter : 'all';
    filterAndSearchProducts(category, e.target.value);
});

function filterAndSearchProducts(category, searchTerm) {
    const lowerTerm = searchTerm.toLowerCase().trim();
    
    const filtered = products.filter(product => {
        const matchesCategory = category === 'all' || product.category === category;
        const matchesSearch = product.name.toLowerCase().includes(lowerTerm);
        return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
}

function renderProducts(items) {
    productGrid.innerHTML = '';
    
    if (items.length === 0) {
        noResultsInfo.classList.remove('hidden');
        return;
    }
    
    noResultsInfo.classList.add('hidden');
    
    items.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        // Stagger animation
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="category-tag">${product.category}</div>
            </div>
            <div class="card-content">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        productGrid.appendChild(card);
    });
}
