import axios from "../utilities/axios";

// add to cart
export async function postToCart(payload) {
  return axios.post("/product/cart", payload);
}

// fetch cart
export async function fetchCartItems() {
  return await axios.get("/product/cart");
}

// fetch a product
export async function fetchProduct(ref) {
  return await axios.get(`/product/catalog/${ref}`);
}

//fetch product categories
export async function fetchProductCategories() {
  return await axios.get("/product/categories");
}

export async function fetchSubProducts(catRef, subCatRef) {
  return axios.get(`/product/catalog/subcategory/${catRef}/${subCatRef}`);
}
