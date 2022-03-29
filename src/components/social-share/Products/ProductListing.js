import React,{useEffect,useState} from 'react';
import image from "../../../assets/images/logo512.png";
import { Grid,Container, Box, Button, Typography, Popover} from '@mui/material'; 
import {EmailShareButton, FacebookShareButton,WhatsappShareButton} from "react-share";
import HelmetMetaData from '../Helmat';
// import MetaTags from 'react-meta-tags';
import {useDispatch,useSelector} from 'react-redux';
import { getProducts,getUser } from '../../../redux/actions/commonAction';
import {useNavigate} from "react-router-dom";
const ProductListing = () => {
    const [allproducts,SetAllProducts] =  useState([]);
    const products = useSelector(state => state.commonReducer.products);
    const navigate = useNavigate();
    const dispatchAction = useDispatch();
    // const products = [
    //     {
    //         "title": "Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)",
    //         "description": "Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)",
    //         "MRP": "5000"
    //     },
    //     {
    //         "title": "Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)",
    //         "description": "Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)",
    //         "MRP": "2500"
    //     },
    //     {
    //         "title": "Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)",
    //         "description": "Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)",
    //         "MRP": "7800"
    //     },
    //     {
    //         "title": "Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)",
    //         "description": "Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)",
    //         "MRP": "3300"
    //     }
    // ]
    // const shareUrl = "http://localhost:3000/listproduct";
    // // const shareUrl = "https://www.amazon.in/dp/B08L13YPGZ/ref=s9_acsd_al_bw_c2_x_2_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-2&pf_rd_r=9RTHSDJJBK1DA0JHPX1D&pf_rd_t=101&pf_rd_p=ab88a745-9ec7-4829-9007-14a9beae70dd&pf_rd_i=11599648031&th=1"
    // console.log("shareUrl",shareUrl)
   useEffect(async() => {
       await dispatchAction(getProducts()); 
       await dispatchAction(getUser());
   }, [])
   console.log("products",products)
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
                    <img src={item.image} width={250} height={250} />
                    <div className="title">
                        {item.title}
                    </div>
                    {/* <div className="desc">
                        {item.description}
                    </div> */}
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
            {/* <HelmetMetaData 
                title={"Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring IPX7 with Blood Oxygen, Fitness, Sports & Sleep Tracking (Black)"}
                description={"Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch"}
                image={image}
                
            ></HelmetMetaData> */}
            {getData()}
            <h1>dssfsdf dsdsa</h1>
         </Grid>
        
    )
}

export default ProductListing;