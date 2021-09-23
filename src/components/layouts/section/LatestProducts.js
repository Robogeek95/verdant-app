import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../products/groceries/Loader'
import Message from '../../products/groceries/Message'
import GroceryProduct from '../../products/groceries/GroceryProduct'
import { listProducts } from '../../../actions/productActions'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';

const LatestProducts = () => {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList 
  

  useEffect(() => {

    dispatch(listProducts())

  }, [dispatch])
  
  return (
    <div>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
      <OwlCarousel className='owl-theme' loop margin={10} responsiveClass={true} responsive={0} items={3} nav>
          {products.map(product => (
              <GroceryProduct product={product} key={product.id} />
          ))}             
      </OwlCarousel>
      )}
    </div>
  )
}



export default LatestProducts
