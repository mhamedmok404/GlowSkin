// Products data
const products = [
  {
    id: 1,
    name: 'Flawless Foundation',
    price: 49.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    category: 'cream'
  },
  {
    id: 2,
    name: 'Premium Foundation',
    price: 39.99,
    oldPrice: 52.99,
    image: 'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    isNew: true,
    category: 'cream'
  },
  {
    id: 3,
    name: 'Active Foundation',
    price: 32.99,
    image: 'https://images.pexels.com/photos/3737596/pexels-photo-3737596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    category: 'serum'
  },
  {
    id: 4,
    name: 'Liquid Lip Gloss',
    price: 19.99,
    oldPrice: 24.99,
    image: 'https://images.pexels.com/photos/5926365/pexels-photo-5926365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    isSale: true,
    category: 'serum'
  },
  {
    id: 5,
    name: 'Natural BB Cream',
    price: 28.99,
    image: 'https://images.pexels.com/photos/5444696/pexels-photo-5444696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    category: 'cream'
  },
  {
    id: 6,
    name: 'Luxury Lipstick',
    price: 22.99,
    image: 'https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    category: 'eyeliner'
  },
  {
    id: 7,
    name: 'Shimmer Eyeshadow',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7290121/pexels-photo-7290121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    category: 'eyeliner'
  },
  {
    id: 8,
    name: 'Hydrating Setting Spray',
    price: 26.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    category: 'eyeliner'
  }
];

// DOM Elements
const productGrid = document.querySelector('.product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchToggle = document.querySelector('.search-toggle');
const newsletterForm = document.getElementById('newsletterForm');

// Functions
function createProductCard(product) {
  const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
  
  return `
    <div class="product-card">
      <div class="product-image">
        ${product.isNew ? '<span class="badge new">NEW</span>' : ''}
        ${product.isSale ? '<span class="badge sale">SALE</span>' : ''}
        <img src="${product.image}" alt="${product.name}">
        <div class="product-actions">
          <button class="action-btn"><i class="cart-icon"></i></button>
          <button class="action-btn favorite"><i class="heart-icon"></i></button>
          <button class="action-btn"><i class="search-icon"></i></button>
        </div>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="rating">${stars}</div>
        <div class="price">
          <span class="current">$${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="old">$${product.oldPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

function filterProducts(category) {
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);
  
  productGrid.innerHTML = filteredProducts.map(createProductCard).join('');
}

// Event Listeners
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    filterProducts(button.dataset.category);
  });
});

searchToggle.addEventListener('click', () => {
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';
  searchContainer.innerHTML = `
    <input type="text" placeholder="Search..." class="search-input">
    <button class="search-submit"><i class="search-icon"></i></button>
  `;
  
  searchToggle.replaceWith(searchContainer);
  searchContainer.querySelector('input').focus();
  
  document.addEventListener('click', function closeSearch(e) {
    if (!searchContainer.contains(e.target)) {
      searchContainer.replaceWith(searchToggle);
      document.removeEventListener('click', closeSearch);
    }
  });
});

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  
  // Simulate API call
  setTimeout(() => {
    alert(`Thank you for subscribing with ${email}!`);
    e.target.reset();
  }, 500);
});

// Initialize products grid
filterProducts('all');