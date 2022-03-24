import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from '../../Components/Header';
import Products from '../../Constants/Products';


const ProductView = () => {
    const history = useNavigate();
    const { state } = useLocation();
    const { id, name } = useParams();

    const product = state?.productparam ? state?.productparam : Products?.find((e) => Number(e.id) === Number(id) || e.title === name);
    const onClickBackBtn = () => {
        history('/product-catalouge');
    }
    return <div className='gl-productview'>
        <Header title="Product View" onClickBackBtn={onClickBackBtn}/>
        <Helmet
            title={product.title}
            meta={[{
                  property: "og:url",
                  content: `https://localhost:3000/product-view/${product.id}/${product.title}`
                },
                {
                  property: "og:type",
                  content: "website"
                },
                {
                  property: "og:title",
                  content: product.title
                },
                {
                  property: "og:description",
                  content: product.description
                },
                {
                  property: "og:image",
                  content: product.file
                }, 
                {
                    property: "twitter:url",
                    content: `https://localhost:3000/product-view/${product.id}/${product.title}`
                },
                {
                    property: "twitter:card",
                    content: "website"
                },
                {
                    property: "twitter:title",
                    content: product.title
                },
                {
                    property: "twitter:description",
                    content: product.description
                },
                {
                    property: "twitter:image",
                    content: product.file
                }
            ]}
        />
        <div className='gl-productview-body'>
            <div className='gl-productview-body-title'>{product.title}</div>
            <img className='gl-productview-body-img' alt="expample" src={product.file} />
            <div className='gl-productview-body-description'><span>Description:</span> {product.description}</div>
            <div className='gl-productview-body-type'><span>Type:</span> {product.type}</div>
            <div className='gl-productview-body-rating'><span>Rating:</span> {product.rating}</div>
            <div className='gl-productview-body-price'><span>Price:</span> {product.price}</div>
        </div>
    </div>;
};

export default ProductView;