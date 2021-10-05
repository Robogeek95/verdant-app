import axios from "../utilities/axios";

// add to cart
export async function postToCart(payload) {
  return axios.post("/product/cart", payload);
}

// delete item from cart
export async function deleteFromCart({ product_ref }) {
  return axios.delete(`/product/cart/${product_ref}`);
}

// update cart item
export async function updateCart(product_ref, payload) {
  return axios.put(`/product/cart/${product_ref}`, payload);
}

// fetch cart
export async function fetchCartItems() {
  return await axios.get("/product/cart");
}

export async function checkoutCart(beneficiary_ref) {
  return axios.get(`/product/checkout/${beneficiary_ref}`);
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

// Add Beneficiary
export async function AddBeneficiaryService(payload) {
  return axios.post(`/user/beneficiary`, payload);
}

// list Beneficiaries
export async function ListBeneficiariesService() {
  return axios.get(`/user/beneficiary`);
}

// delete Beneficiary
export async function deleteBeneficiaryService(ref) {
  return axios.delete(`/user/beneficiary/${ref}`);
}

// upload invoice
export async function addInvoiceService(ref) {
  return axios.post(`/product/invoice_upload/`, ref, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
}

// get all invoice
export async function listInvoiceService() {
  return null;
}

// get all invoice
export async function deleteInvoiceService() {
  return null;
}

// update user
export async function updateUserService(payload) {
  return axios.post(`/user/updateme`, payload);
}

// get all orders
export async function listOrderService() {
  return axios.get(`/user/orders`);
}

// delete order
export async function deleteOrderService() {
  return null;
}
