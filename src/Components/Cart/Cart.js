import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa';
import { removeFromCart } from '../redux/productActions/ProductActions'

function Cart() {
          const dispatch = useDispatch();

  const cart_data = useSelector((state) => state.ProductData.cartData);
  console.log(cart_data);

  const totalPrice = cart_data.reduce((previousValue,currentValue)=>{
    return previousValue + currentValue.price
  },0)

  return (
    <div>
      <h2 className='text-center text-muted mt-4'>Cart Page</h2>
      <div className='product_total'>
        <div className='text-center mt-2'>
          <h5>Total Price :<span className='text-danger'>{totalPrice}</span></h5>
        </div>
        <div className='container mt-4'>
          {
            cart_data && cart_data.length ? (
              cart_data.map((product) => (
                <div className='row mt-3'>
                  <div className='imageDetail col-md-4'>
                    <img src={product.image} alt={product.title} class="img-fluid" />
                  </div>
                  <div className='col-md-6'>
                    <h1>{product.category}</h1>
                    <div className='mt-3'>
                      <h2>{product.title}</h2>
                      <div className='mt-4'>
                        <span>{product.description}</span>
                        <div className='rating mt-4'>
                          <h4><span className='text-white'>{product.rating.rate} <FaStar /></span></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-2 mt-5'>
                    <div>
                        <p>Price :₹{product.price}</p>
                  </div>
                  <button className='btn btn-danger mt-5' 
                  onClick={()=>{dispatch(removeFromCart(product.id))}}
                  >Remove From cart</button>
                </div>
                </div>
              ))
            ) : (<p className='text-center mt-5'>Please Add Some Products To The Cart</p>)
          }
        </div>
      </div>

    </div>
  )
}

export default Cart