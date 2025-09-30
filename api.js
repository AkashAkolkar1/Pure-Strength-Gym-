// API configuration
const API_URL = 'http://localhost:5000/api';
const AUTH_TOKEN_KEY = 'hu_token';

// Get auth token
function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

// API request helper
async function apiRequest(endpoint, options = {}) {
  const token = getAuthToken();
  if (token) {
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`
    };
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}

// Products API
const ProductAPI = {
  // Get all products
  async getAll() {
    return await apiRequest('/products');
  },

  // Get single product
  async getById(id) {
    return await apiRequest(`/products/${id}`);
  }
};

// Orders API
const OrderAPI = {
  // Get user's orders
  async getAll() {
    return await apiRequest('/orders');
  },

  // Get single order
  async getById(id) {
    return await apiRequest(`/orders/${id}`);
  },

  // Create new order
  async create(orderData) {
    return await apiRequest('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  }
};

// Cart functions
const CART_KEY = 'hu_cart';

const CartAPI = {
  // Get cart items from localStorage
  getItems() {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  },

  // Save cart items to localStorage
  saveItems(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  },

  // Add item to cart
  addItem(product, quantity = 1) {
    const items = this.getItems();
    const existingItem = items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      });
    }

    this.saveItems(items);
    return items;
  },

  // Update item quantity
  updateQuantity(productId, quantity) {
    const items = this.getItems();
    const item = items.find(item => item.id === productId);
    
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        const index = items.indexOf(item);
        items.splice(index, 1);
      }
    }

    this.saveItems(items);
    return items;
  },

  // Remove item from cart
  removeItem(productId) {
    const items = this.getItems();
    const index = items.findIndex(item => item.id === productId);
    
    if (index !== -1) {
      items.splice(index, 1);
      this.saveItems(items);
    }
    
    return items;
  },

  // Clear cart
  clear() {
    localStorage.removeItem(CART_KEY);
  },

  // Calculate cart total
  getTotal() {
    return this.getItems().reduce((total, item) => total + (item.price * item.quantity), 0);
  }
};

// Export APIs
window.api = {
  products: ProductAPI,
  orders: OrderAPI,
  cart: CartAPI
};