import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import Loader from "../../products/groceries/Loader";
import GroceryProduct from "../../products/groceries/GroceryProduct";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import handleApiError from "../../../utilities/handleApiError";
import formatApiError from "../../../utilities/formatAPIError";
import { toast } from "react-toastify";
import { fetchProducts } from "../../../utilities/services";

const LatestProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [setError] = useState("");

  useEffect(() => {
    setLoading(true);
    return fetchProducts()
      .then((res) => {
        // now we have the grocery products
        // set grocery to state
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((error) => {
        handleApiError(error);
        let message = formatApiError(error);
        toast(message);
        setError(error);
      });
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        responsiveClass
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        }}
        items={3}
        nav
      >
        {products.map((product) => (
          <GroceryProduct product={product} key={product.id} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default LatestProducts;
