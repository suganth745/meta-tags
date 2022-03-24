import React from "react";
import { Card } from "antd";

const Product = (props) => {
    const  { title, price, imgSrc, ratings, data, onClick } = props;

    const onClickCard = () => {
        if (onClick) {
            onClick(data);
        }
    }
     return <Card
            onClick={onClickCard}
            hoverable
            className="gl-product-card"
            cover={<img alt="example" className="gl-product-card-img" src={imgSrc} />}
        >
            <div className="gl-product-card-title">{title}</div>
            <div className="gl-product-card-price">Price: {price}</div>
            <div className="gl-product-card-ratings">Ratings: {ratings}</div>
        </Card>;
}

export default Product;