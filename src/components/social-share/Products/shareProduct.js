import React, { useEffect } from "react";
import {FacebookShareButton,WhatsappShareButton,WhatsappIcon,FacebookIcon} from "react-share";

import { Grid,Container, Box, Button, Typography, Popover} from '@mui/material'; 
import Header from "../../common/Header";
import image from "../../../assets/images/logo512.png";
// import WhatsappIcon from "./icons/whatsAppIcon";
import {selectedProduct} from "../../../redux/actions/commonAction"
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import HelmetMetaData from '../Helmat';
const ShareProduct = () => {
    const shareUrl = window.location.href;
    const product =  useSelector(state => state.commonReducer.selectedProduct);
    const {id} = useParams();
    const dispatchAction = useDispatch()
    useEffect(async ()=>{
        await dispatchAction(selectedProduct(id));
    },[])
    return (
        <>
           {
               product && 
           
           <Grid container>
                <HelmetMetaData 
                    title={product.title}
                    image={product.image}
                    description={product.description}
                >
                </HelmetMetaData>
                <Grid item lg={6} md={6} xs={12} >
                    <img width={250} height={250} src={product?.image ? product?.image : image }  />
                </Grid>
                <Grid item lg={6} md={6} xs={12} sx={{mt:5}} >
                    <div className="title">
                        {product.title}
                    </div>
                    <div className="desc">
                        {product.description}
                    </div>
                    <div className="share-blk">
                        <WhatsappShareButton
                                url={shareUrl}
                                // url={"https://kind-shockley-0c5461.netlify.app/"}
                                title={product.title}
                                separator="::"
                                className="Demo__some-network__share-button"
                                >
                                <WhatsappIcon size={32} round />  
                        </WhatsappShareButton>

                        <FacebookShareButton
                                // url={"https://kind-shockley-0c5461.netlify.app/"}
                                url={shareUrl}
                                quote="product info"
                                title={product.title}
                                hashtag ={ `#${product.title}`}
                                separator="::"
                                className="Demo__some-network__share-button"
                                >
                                <FacebookIcon size={32} round />  
                        </FacebookShareButton>


                    </div>  
                </Grid>
           </Grid> 
           }
            {/* <Header/> */} 
        </>
    )
}
export default ShareProduct;