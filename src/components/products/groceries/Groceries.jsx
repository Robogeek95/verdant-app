import React, { useState, useEffect } from "react";
import { Col, Row, DropdownButton, Dropdown, Card, Nav } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
import axios from "../../../utilities/axios";
import image2 from "../../images/groceries-image/grocery-banner.png";
// import image3 from "../../images/groceries-image/item3.png";
import Accordion from "./Accordion";
import GroceryProduct from "./GroceryProduct";
import Loader from "./Loader";
import { ToastContainer, toast } from "react-toastify";
import handleApiError from "../../../utilities/handleApiError";
import formatApiError from "../../../utilities/formatAPIError";

const Groceries = () => {
  const [productCategories, setProductCategories] = useState({
    data: [],
    loading: false,
    error: "",
  });

  const [products, setProducts] = useState({
    data: [],
    loading: false,
    error: "",
  });

  const [newProducts, setNewProducts] = useState([]);

  const [category, setCategory] = useState({ name: "all categories", ref: "" });

  // fetch categories
  useEffect(() => {
    setProductCategories({ ...productCategories, loading: false });

    axios
      .get("/product/categories")
      .then((res) => {
        setProductCategories({
          ...productCategories,
          data: res.data.categories,
          loading: false,
        });
      })
      .catch((error) => {
        handleApiError(error);
        let message = formatApiError(error);

        setProductCategories({
          ...productCategories,
          loading: false,
          error: message,
        });

        toast(message);
      });
  }, []);

  // fetch all products
  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    setProducts({ ...products, loading: true });
    axios
      .get("/product/catalog")
      .then((res) => {
        setProducts({ ...products, data: res.data?.products, loading: false });
      })
      .catch((error) => {
        handleApiError(error);
        let message = formatApiError(error);

        setProducts({ ...products, loading: false, error: message });
        toast(message);
      });
  }

  // fetch products by category
  useEffect(() => {
    if (category.ref) {
      setProducts({ ...products, loading: true });
      axios
        .get(`/product/catalog/category/${category.ref}`)
        .then((res) => {
          setProducts({
            ...products,
            data: res.data?.products,
            loading: false,
          });
        })
        .catch((error) => {
          handleApiError(error);
          let message = formatApiError(error);

          setProducts({ ...products, loading: false, error: message });
          toast(message);
        });
    }
  }, [category]);

  // set new products
  useEffect(() => {
    setNewProducts(products.data.slice(0, 3));
  }, [products]);

  return (
    <div className="container py-4">
      <ToastContainer />
      <Row>
        <Col sm={12} md={12} lg={12} className="py-3">
          <h6 style={{ fontSize: "16px", fontWeight: "400" }}>
            Products
            <ChevronRight />
            <span
              className="text-primary"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              Groceries
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
              >
                <Card.Body>
                  {productCategories?.loading ? (
                    <div className="py-5">
                      <Loader />
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setCategory({
                            ...category,
                            name: "all categories",
                          });
                          fetchProducts();
                        }}
                        className="btn text-dark text-left mb-2"
                      >
                        All
                      </button>
                      {productCategories.data.map((cat) => (
                        <div key={cat.ref}>
                          <Nav
                            defaultActiveKey="/"
                            className="flex-column footer-nav"
                          >
                            <button
                              onClick={() =>
                                setCategory({
                                  ...category,
                                  ref: cat.ref,
                                  name: cat.category,
                                })
                              }
                              className="btn text-dark text-left mb-2"
                            >
                              {cat.category}
                            </button>
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
              >
                <Card.Body>
                  <Nav defaultActiveKey="/" className="flex-column footer-nav">
                    {newProducts.map((product) => (
                      <Nav.Link
                        key={product.ref}
                        href="/home"
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
                        {category.name}
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

                {products.loading ? (
                  <div className="py-5">
                    <Loader />
                  </div>
                ) : !products.data.length >= 1 ? (
                  <div className="p-5 text-center">
                    <p className="h4">
                      No products found{" "}
                      {category && `for ${category.name} category`}
                    </p>
                  </div>
                ) : (
                  <Row>
                    {products.data.map((product) => (
                      <Col
                        sm={12}
                        md={4}
                        key={product.id}
                        className="mb-3 mx-auto"
                      >
                        <GroceryProduct product={product} key={product.id} />
                      </Col>
                    ))}
                  </Row>
                )}
              </Card>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Groceries;

Groceries.propTypes = {};
