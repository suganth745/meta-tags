import React,{useEffect} from 'react';
// import image from "../../../assets/images/logo512.png";
import { Grid, Button,} from '@mui/material'; 
import {WhatsappShareButton} from "react-share";
// import HelmetMetaData from '../Helmat';
// import MetaTags from 'react-meta-tags';
import {useDispatch,useSelector} from 'react-redux';
import { getProducts,getUser } from '../../../redux/actions/commonAction';
import {useNavigate} from "react-router-dom";
const ProductListing = () => {
    // const [allproducts,SetAllProducts] =  useState([]);
    const products = useSelector(state => state.commonReducer.products);
    const navigate = useNavigate();
    const dispatchAction = useDispatch();
  
   useEffect(() => {
        dispatchAction(getProducts()); 
        dispatchAction(getUser());
   }, [products,dispatchAction])
    const getData = () =>{
        return (products||[]).map((item,index)=>{
            return (
                <Grid key={index} item xs={12} md={3} lg={3}>
                    {/* <MetaTags>
                        <title>Your Page 1</title>
                        <meta name="description" content="Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)" />
                        <meta property="og:title" content="Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)" />
                        <meta property="og:image" content={image} />
                    </MetaTags> */}
                    <img src={item.image} alt="no_pic" width={250} height={250} />
                    <div className="title">
                        {item.title}
                    </div>
                    <div>
                        <Button onClick ={()=>{ navigate(`/product/${item.id}`)}}>View</Button>
                    </div>
                    <div className="share-blk">
                        <WhatsappShareButton
                            url={shareUrl}
                            title={item.title}
                            separator="::"
                            className="Demo__some-network__share-button"
                            >                        
                            share to whats app
                            {/* <WhatsappIcon size={32} round />  */}
                        </WhatsappShareButton>

                    </div>
                </Grid>
            )
        })
    } 
    const shareUrl = window.location.pathname
    return (
        
        <Grid container spacing={2}  direction="row" justifyContent="center" alignItems="center">
            {getData()}
         </Grid>
        
    )
}

export default ProductListing;