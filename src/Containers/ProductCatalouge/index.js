import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Product from "../../Components/Product";

import ProductList from "../../Constants/Products";

const DateFucntion = () => {
    const history = useNavigate();

    const onClickBackBtn = () => {
        history('/');
    }

    const onClickProduct = (data) => {
        history(`/product-view/${data.id}/${data.title}`, {
            state: {
                productparam: data,
            }
        })
    }

    return <div className="gl-productcatalouge">
        <Header title="Product Catalouge" onClickBackBtn={onClickBackBtn}/>
        <div className="gl-productcatalouge-body">
            {ProductList.map((eProduct) => <Product onClick={onClickProduct} data={eProduct} title={eProduct.title} imgSrc={eProduct.file} price={eProduct.price} ratings={eProduct.rating} />)}
        </div>
    </div>
};

export default DateFucntion;