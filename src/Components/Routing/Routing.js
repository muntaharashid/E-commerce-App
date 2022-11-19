import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Home from '../Home/Home'
import Product from '../redux/Products/Product'
import ProductDetail from '../redux/Products/ProductDetail'

function Routing() {
  return (
    <div>
       <Routes>
       
            <Route path='/' element={<Product />}/>
            <Route path='product' element={<Product />}/>
            <Route path="/product/:id" element={<ProductDetail />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="home" element={<Home />}/>
            
            
            
       </Routes>
    </div>
  )
}

export default Routing