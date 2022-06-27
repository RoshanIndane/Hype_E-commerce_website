


 export const ADD_PRODUCT = "ADD_PRODUCT";
 export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

 export const addProduct = (payload)=>{
    return {
        type: ADD_PRODUCT,
        payload: payload
    }
 }

 export const removeOne = (payload)=>{
    return {
        type: REMOVE_PRODUCT,
        payload: payload
    }
 }

