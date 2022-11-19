import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchProducts } from '../productActions/ProductActions';

function Product() {
    const dispatch = useDispatch();
    const Product = useSelector((state)=>state.ProductData.products);
    // console.log(Product);
    // const [Product, setProduct] = useState([])
    // const getProduct = async () => {
    //     const response = await fetch(`https://fakestoreapi.com/products`);
    //     const data = await response.json();
    //     console.log(data);
    //     setProduct(data);
    // }

    useEffect(() => {
        // getProduct();
        dispatch((fetchProducts())
        );
    }, []);

    return (
        <div>
            <h2 className='text-center text-muted py-5 my-4'>Our Products</h2>
              <div className="container">
                <div className="row">
                    {
                        Product.length>0 ?
                        Product.map((Products)=>(
                            <div className="decoration col-md-3">
                                
                            <Link to={`/product/${Products.id}`}>
                            <div key={Products.id} className="card my-2 h-100">
                                <img src={Products.image} className='card-img-top' alt={Products.category} />
                                <div className='card-body'>
                                        <h5 className='card-title'>{Products.title}</h5>
                                </div>
                            </div>
                            </Link>
                            </div>
                        )):<p>loading...</p>
                    }
                </div>
                </div>  
        </div>
    )
}

export default Product