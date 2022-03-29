import React, { useEffect } from "react";
import {FacebookShareButton,WhatsappShareButton,WhatsappIcon,FacebookIcon} from "react-share";
import { Grid} from '@mui/material'; 
// import Header from "../../common/Header";
import alt_pic from "../../../assets/images/logo512.png";
// import WhatsappIcon from "./icons/whatsAppIcon";
import {selectedProduct} from "../../../redux/actions/commonAction"
import {useParams} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import HelmetMetaData from '../Helmat';
const ShareProduct = () => {
    // const shareUrl = window.location.href;
    const product =  useSelector(state => state.commonReducer.selectedProduct);
    const {id} = useParams();
    const dispatchAction = useDispatch()
    useEffect(()=>{
        const getProduct =  () => {
            dispatchAction(selectedProduct(id));
        }
        getProduct();
    },[id,dispatchAction])
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
                    <img width={250} height={250} alt="no pic" src={product?.image ? product?.image : alt_pic }  />
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
                                // url={shareUrl}
                                url={`https://monumental-muffin-4b1dbb.netlify.app${window.location.pathname}`}
                                title={product.title}
                                separator="::"
                                className="Demo__some-network__share-button"
                                >
                                <WhatsappIcon size={32} round />  
                        </WhatsappShareButton>

                        <FacebookShareButton
                                url={`https://monumental-muffin-4b1dbb.netlify.app${window.location.pathname}`}
                                // url={shareUrl}
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
        </>
    )
}
export default ShareProduct;