import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/product.css'

const Product = ({prod}) => {
    return (
        <div className='prod'>
          <Link to={`/product/${prod.id}`}>
            <img className="prod-image" src={prod.img} alt=""/>
          </Link>
          <div className="prod-body">
            <Link to={`/product/${prod._id}`}>
                <h6 className="prod-name"> {prod.title} </h6>
            </Link>
            <h6> 	&#8377;{prod.price} </h6>
          </div>
        </div>
    )
}

export default Product
