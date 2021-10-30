import React from 'react'
import './Product.css'
// import Ratings from '../Ratings'

function Product(props) {
    return (
        <div className="p-wrap">   
          <h3 className="Title">{props.Title}</h3>
          <p className="Description">{props.Description}</p>
          {/* <Ratings/>  */}
        </div>
    )
}

export default Product
