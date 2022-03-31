import React from 'react'
import { useParams } from 'react-router-dom'

import Meta from '../components/meta'
import Data from '../products.json'
import '../styles/productDetails.css'

const ProductDetails = () => {
    const { id } = useParams()
    const product = Data.products[id-1]

    return (
        <div className="prod-details">
            <Meta title={product.title} desc={product.desc} img={product.img} />
                <div className="prod-con">
                    <div className="prod-details-body">
                        <div className="prod-leftbar">
                            <div className="prod-img">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="prod-btn">
                                <button className="btn btn-add-cart #ffc400 amber accent-3"> 
                                    <i className="material-icons">shopping_cart</i> Add To Cart 
                                </button>
                                <button className="btn btn-buy #ff6d00 orange accent-4">
                                    <i className="material-icons">bolt</i> Buy Now 
                                </button>
                            </div>
                        </div>
                        <div className="prod-rightbar">
                        <h5 className="prod-name">{product.title}</h5>
                        <h6 className="prod-price"> Price: &#8377;{product.price} </h6>
                        <p className="prod-status"> 
                            Status: { product.stock>0? 
                                <span className="#827717 lime darken-4"> In Stock </span> :  
                                <span className="#d50000 red accent-4"> Out of Stock</span> } 
                        </p>
                        <p className="prod-desc"> Description: {product.desc} </p>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default ProductDetails
