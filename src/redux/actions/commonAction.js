import { FETCH_PRODUCTS,SELECTED_PRODUCT,GET_USER } from "../constants";
import { callApi } from "../../callApi";
import Products from "../../productData/Products.json"
import configuVariables from "../../config";
const { baseUrl } = configuVariables

console.log("Prodducts--commom",Products)

export const getProducts =  () => async (dispatch) => {
    // let response = await callApi(`${baseUrl}/products`, "GET", "", "");
    // if (response) {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: Products
        })
    // } else {
    //     dispatch({
    //         type: FETCH_PRODUCTS,
    //         payload: []
    //     })
    // }
}

export const selectedProduct =  (id) => async (dispatch) => {
    // let response = await callApi(`${baseUrl}/products/${id}`, "GET", "", "");
    // if (response) {
    //     dispatch({
    //         type: SELECTED_PRODUCT,
    //         payload: response.data
    //     })
    // } else {
        let data = Products.find((item)=>  item.id ===  +id)
        console.log("Daaaaaaaaaaaaaaaaaaaaaa",data)
        dispatch({
            type: SELECTED_PRODUCT,
            payload: data
        })
    // }
}
export const getUser = () => async (dispatch) => {
    let response = await callApi(`${baseUrl}/users/1`, "GET", "", "");
    if (response) {
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    } else {
        dispatch({
            type: GET_USER,
            payload: {}
        })
    } 
}

