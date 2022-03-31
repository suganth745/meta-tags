import { FETCH_PRODUCTS,SELECTED_PRODUCT,GET_USER } from "../constants";

const  commonReducer = (state={},{type,payload}) => {
    switch (type) {
        case FETCH_PRODUCTS: return { ...state,products:payload }
        case SELECTED_PRODUCT : return {...state,selectedProduct:payload}
        case GET_USER : return {...state,activeUser:payload}
        default: return {...state}
    }
}

export default commonReducer;