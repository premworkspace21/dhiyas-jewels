
/* Dhiyas Jewels - Shared JS */
const CATALOG_KEY = 'dj_catalog';
const CART_KEY = 'dj_cart';

async function loadCatalog() {
  try {
    const res = await fetch('assets/products.json');
    const fallback = await res.json();
    const override = JSON.parse(localStorage.getItem(CATALOG_KEY) || 'null');
    return Array.isArray(override) ? override : fallback;
  } catch (e) {
    console.warn('Failed to fetch products.json, using localStorage only', e);
    return JSON.parse(localStorage.getItem(CATALOG_KEY) || '[]');
  }
}

function saveCatalog(catalog) {
  localStorage.setItem(CATALOG_KEY, JSON.stringify(catalog));
}

function loadCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(itemId, qty=1) {
  const cart = loadCart();
  const idx = cart.findIndex(c => c.id === itemId);
  if (idx >= 0) { cart[idx].qty += qty; } else { cart.push({ id: itemId, qty }); }
  saveCart(cart);
  alert('Added to cart');
}

function formatINR(num) {
  return new Intl.NumberFormat('en-IN', { style:'currency', currency:'INR'}).format(num);
}

function renderProducts(container, products) {
  container.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.images?.[0] || ''}" alt="${p.name}">
      <div class="content">
        <div class="badge">${p.category}</div>
        <h3>${p.name}</h3>
        <p>${p.short_description}</p>
        <p class="price">${formatINR(p.price)}</p>
        <div class="controls">
          <button class="btn" onclick="addToCart('${p.id}')">Add to Cart</button>
          <a class="btn secondary" href="product.html?id=${encodeURIComponent(p.id)}">View Details</a>
        </div>
      </div>
    </div>
  `).join('');
}

function findProduct(catalog, id) {
  return catalog.find(p => p.id === id);
}
