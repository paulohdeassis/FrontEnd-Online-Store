export const getCategories = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
};

export const getProductsFromCategoryAndQuery = async (query, categoryId) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const products = await response.json();
  return products;
};

export const getSpecificProduct = async (productID) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${productID}`);
  const product = await response.json();
  return product;
};
