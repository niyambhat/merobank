import React from 'react'
import '../components/ProductList.css'
import {product} from '../data'
import Product from '../components/Product/Product'

function ProductList() {
    return (   
        <div className="p-l">
            <div className="pl-head">
                <h2>Our Products</h2>
                <p>Use one of our calculators to view your goals.</p>
            </div>
          <div className="main-list"> 
          {product.map(product=>{
              return(
              <Product Title={product.title} Description={product.description}/>
              )})}
           </div>
        </div>
    )
}

export default ProductList
