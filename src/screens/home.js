import React from 'react'

import Product from '../components/Product'
import Meta from '../components/meta'
import logo from '../assets/logo.png'
import Data from '../products.json'
import '../styles/home.css'

const Home = () => {

    return (
        <div className="home">
            <Meta title='Opencart' desc='One stop solution for all' img={logo}/>
            {
                Data.products.map((prod,idx)=>(
                    <Product prod={prod} key={idx}/>
                ))    
            }
        </div>
    )
}

export default Home
