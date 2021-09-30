import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import handleApiError from "../../../utilities/handleApiError";
import GroceryProduct from "./GroceryProduct";
import formatApiError from "../../../utilities/formatAPIError";
import { Col, Row, Card, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import image2 from "../../images/groceries-image/grocery-banner.png";
import Accordion from "./Accordion";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Loader from "./Loader";

import { addToCart } from "../../../actions/cartActions";
import { connect } from "react-redux";
import {
  fetchProductCategories,
  fetchSubProducts,
  postToCart,
} from "../../../utilities/services";

const Groceries = ({ match, addToCart, userLogin }) => {
  const [products, setProducts] = useState([]);
  const [, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [fetchingCategories, setFetchingCategories] = useState(true);
  const [fetchingProducts, setFetchingProducts] = useState(true);
  const { userInfo } = userLogin;

  const category = "household";
  const subcategory = match.params.category;

  // fetch all data
  useEffect(() => {
    fetchSnapshot(category, subcategory);
  }, [subcategory, category]);

  async function fetchSnapshot(category, subcategory) {
    // fetch all categories

    setFetchingCategories(true);
    fetchProductCategories()
      .then((res) => {
        const categories = res.data?.categories;
        setCategories(categories);
        setFetchingCategories(false);

        // activeCategory
        // get the active category
        const activeCategory = categories.find(
          (cat) => cat?.category?.toLowerCase() === category
        );
        setSubCategories(activeCategory.sub_categories);

        // subcategory
        // grocery is a subcategory to household category
        const activeSubCategory = activeCategory?.sub_categories?.find(
          (subCat) => subCat?.name?.toLowerCase() === subcategory
        );

        // fetch grocery subcategory using the category ref and subcategory ref
        setFetchingProducts(true);
        return fetchSubProducts(activeCategory.ref, activeSubCategory.ref);
      })
      .then((res) => {
        // now we have the grocery products
        // set grocery to state
        setProducts(res.data.products);
        setFetchingProducts(false);
      })
      .catch((error) => {
        handleApiError(error);
        let message = formatApiError(error);
        toast(message);
      });
  }

  function handleAddToCart(item) {
    // if logged in
    if (userInfo) {
      let payload = {
        product_ref: item.ref,
        quantity: 1,
        amount: item.amount,
      };

      // add item to cart using api
      postToCart(payload).then(() => {
        // store in global state
        addToCart(item);
        toast(`${item.name} added to cart`);
      });
      return;
    }

    addToCart(item);
    toast(`${item.name} added to cart`);
  }

  // set new products
  useEffect(() => {
    setNewProducts(products.slice(0, 3));
  }, [products]);

  function renderProducts() {
    return !products.length >= 1 ? (
      <div className="p-5 text-center">
        <p className="h4">
          No products found {subcategory && `for ${subcategory} subcategory`}
        </p>
      </div>
    ) : (
      <Row>
        {products.map((product) => (
          <Col sm={12} md={4} key={product.id} className="mb-3 mx-auto">
            <GroceryProduct
              product={product}
              key={product.id}
              addToCart={handleAddToCart}
            />
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <div className="container py-4">
      <ToastContainer />
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: "16px", fontWeight: "400" }}>
            Products
            <ChevronRight />
            <span
              className="text-primary text-capitalize"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              {subcategory}
            </span>
          </h6>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12} lg={12}>
          <div>
            <img
              src={image2}
              className="img-fluid"
              alt="The Groceries Banner"
            />
          </div>
        </Col>
      </Row>

      <section className="p-3 my-5">
        <Row>
          <Col as="div" sm={12} md={3} className="px-0">
            <Card className="mb-5">
              <Accordion
                title="Categories"
                style={{ fontSize: "20px", fontWeight: "500" }}
                expanded={true}
              >
                <Card.Body>
                  {/* Todo: fix reload on change */}
                  {fetchingCategories ? (
                    <div className="py-5">
                      <Loader />
                    </div>
                  ) : (
                    <>
                      {subCategories.map((cat) => (
                        <div key={cat.ref}>
                          <Nav
                            defaultActiveKey="/"
                            className="flex-column footer-nav"
                          >
                            <Link to={`/products/${cat.name.toLowerCase()}`}>
                              <button
                                // onClick={() =>

                                // }
                                className="btn text-dark text-left mb-2"
                              >
                                {cat.name}
                              </button>
                            </Link>
                          </Nav>
                        </div>
                      ))}
                    </>
                  )}
                </Card.Body>
              </Accordion>
            </Card>

            <Card>
              <Accordion
                title="New Products"
                style={{ fontSize: "20px", fontWeight: "500" }}
                expanded={true}
              >
                <Card.Body>
                  <Nav defaultActiveKey="/" className="flex-column footer-nav">
                    {newProducts.map((product) => (
                      <Nav.Link
                        key={product.ref}
                        href={`/products/groceries/${product.ref}`}
                        className="text-dark"
                      >
                        <div className="d-flex">
                          <div
                            className="d-flex mx-auto justify-content-center mt-2"
                            style={{ height: "120px", width: "120px" }}
                          >
                            <img
                              src={product?.image}
                              alt="New Item"
                              className="img-fluid"
                            />
                          </div>
                          <div className="my-auto ml-2">
                            <span
                              className="text-dark"
                              style={{ fontSize: "16px", fontWeight: "500" }}
                            >
                              {product?.name}
                            </span>
                            <p
                              className="text-dark"
                              style={{ fontSize: "16px", fontWeight: "400" }}
                            >
                              {product?.price}
                            </p>
                          </div>
                        </div>
                      </Nav.Link>
                    ))}
                  </Nav>
                </Card.Body>
              </Accordion>
            </Card>
          </Col>

          <Col md={9} className="px-0 groceries-container">
            <div className="card-wrapper">
              <Card className="pb-5" style={{ minHeight: "480px" }}>
                <Row>
                  <Col md={6} sm={12}>
                    <div className="pt-4 mx-4">
                      <h5
                        className="text-dark grocery-header-text"
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          textTransform: "capitalize",
                        }}
                      >
                        {subcategory}
                      </h5>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className="pt-4 mx-4 d-flex align-items-center justify-content-center">
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          marginRight: "10px",
                        }}
                      >
                        Sort By:
                      </span>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="New Products"
                        className="ms-4 sorted-btn"
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          backgroundColor: "#C4C4C436",
                        }}
                      >
                        <Dropdown.Item
                          href="#"
                          className="text-dark navlink"
                          style={{ fontSize: "12px", fontWeight: "500" }}
                        >
                          New Products
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#"
                          className="text-dark navlink"
                          style={{ fontSize: "12px", fontWeight: "400" }}
                        >
                          Price - Low to High
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#"
                          className="text-dark navlink"
                          style={{ fontSize: "12px", fontWeight: "400" }}
                        >
                          Price - High to Low
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </Col>
                </Row>

                <hr />

                {fetchingProducts ? (
                  <div className="py-5">
                    <Loader />
                  </div>
                ) : (
                  renderProducts()
                )}
              </Card>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

function mapStateToProps(state) {
  return { cart: state.cart, userLogin: state.userLogin };
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Groceries);

Groceries.propTypes = {
  match: PropTypes.object,
  addToCart: PropTypes.function,
  userLogin: PropTypes.object,
};
