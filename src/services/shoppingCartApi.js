const SHOPPING_CART_KEY = 'shopping_cart';
const TIMEOUT = 500;
const SUCCESS_STATUS = 'OK';

if (!JSON.parse(localStorage.getItem(SHOPPING_CART_KEY))) {
  localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify([]));
}
const readShoppingCart = () => JSON.parse(localStorage.getItem(SHOPPING_CART_KEY));

const saveShoppingCart = (shoppingCart) => localStorage
  .setItem(SHOPPING_CART_KEY, JSON.stringify(shoppingCart));

// --------------------------------------------------------------------
// A função simulateRequest simula uma requisição para uma API externa
// Esse tipo de função que "chama outra função" é chamada de
// "currying function" https://javascript.info/currying-partials
// não se preocupe, estudaremos isso futuramente.
// --------------------------------------------------------------------

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getShoppingCart = () => new Promise((resolve) => {
  const shoppingCart = readShoppingCart();
  simulateRequest(shoppingCart)(resolve);
});

export const addProduct = (product) => new Promise((resolve) => {
  if (product) {
    const shoppingCart = readShoppingCart();
    saveShoppingCart([...shoppingCart, product]);
  }
  simulateRequest(SUCCESS_STATUS)(resolve);
});

export const removeProduct = (product) => new Promise((resolve) => {
  const shoppingCart = readShoppingCart();
  saveShoppingCart(shoppingCart.filter((p) => p.id !== product.id));
  simulateRequest(SUCCESS_STATUS)(resolve);
});
