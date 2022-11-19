import axios from 'axios';
import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../productActions/ProductActions'
import { useDispatch } from 'react-redux';

function ProductDetail() {
        const dispatch = useDispatch();
        const {id} = useParams();
        const [product,setProduct] = useState([]);
        const [isProductAdded,setisProductAdded] = useState(false);

        const getProductData = async()=>{
            const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(data);
        }
        
        useEffect(() =>{
            getProductData();
        },[]);

  return (
    <div>
            <h1 className='text-center py-5 text-muted'>Product Details Here</h1>
            {
                Object.keys(product).length ? (
                    <div className='row border border-primary mt-4'>
                        <div className='col-md-6 p-5 mt-2'>
                            <div className='imageDetail'>
                                <img src={product.image} alt={product.title} />
                            </div>
                        </div>
                        <div className='col-md-6 p-5 mt-2'>
                            <div className='text-muted'>
                                <h1>{product.category}</h1>
                            </div>
                            <div className='mt-3'>
                                <h2>{product.title}</h2>
                                </div>
                                <div className='description mt-5'>
                                    <h4 className='text-secondary'>{product.description}</h4>
                                </div>
                                <div className='rating mt-4'>
                                    <h4><span className='text-white'>{product.rating.rate} <FaStar /></span></h4>   
                                </div>
                                <span className='count b'>{product.rating.count}&nbsp;ratings</span>
                                <div className='price mt-5'>
                                    <h3 className='mt-5'>Price: <span className='pricecolor'>₹{product.price}</span></h3>
                                </div>
                                <center>
                                    <button className='btn btn-info py-2'
                                    onClick={()=>{dispatch(addToCart(product))
                                        setisProductAdded(true);
                                    }}>
                                        {isProductAdded ? "Added" : "Add To Cart"}
                                    </button>
                                </center>
                            </div>
                    </div>
                ):<p>loading...</p>
            }
    </div>
  )
}

export default ProductDetail

// https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg

// https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg

// https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg