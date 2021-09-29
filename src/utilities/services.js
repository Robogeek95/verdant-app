import axios from "../utilities/axios";

// add to cart
export async function postToCart(payload) {
  return axios.post("/product/cart", payload);
}

// delete item from cart
export async function deleteFromCart({ product_ref }) {
  return axios.delete(`/product/cart/${product_ref}`);
}

// fetch cart
export async function fetchCartItems() {
  return await axios.get("/product/cart");
}

// fetch a product
export async function fetchProduct(ref) {
  return await axios.get(`/product/catalog/${ref}`);
}

// fetch products
export async function fetchProducts() {
  return await axios.get(`/product/catalog/`);
}

//fetch product categories
export async function fetchProductCategories() {
  return await axios.get("/product/categories");
}

export async function fetchSubProducts(catRef, subCatRef) {
  return axios.get(`/product/catalog/subcategory/${catRef}/${subCatRef}`);
}
