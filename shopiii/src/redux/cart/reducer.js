import { ADD_PRODUCT, REMOVE_PRODUCT } from "./action"



const  initialState={
    products:[],
    quantity:0,
    total:0,
}

export const cartReducer= (state=initialState, action)=>{
    
    switch(action.type){
        case ADD_PRODUCT:{
            let flag = false;
        state.products=state.products.map((item)=> {
            if(item._id === action.payload._id){
                item.quantity = item.quantity + 1;
                flag = true;
                return item;
            } else {
                return item;
            }
        })
        if(flag){
            return {...state , quantity:state.quantity, total:state.total+action.payload.price*action.payload.quantity}
        } else {
            return {...state , quantity:state.quantity+1,products:[...state.products, action.payload], total:state.total+action.payload.price*action.payload.quantity}
        }
            // state.products=state.products.filter((item)=>item._id===action.payload._id?{...item, quantity:item.quantity+1}: item)
            // return{...state , quantity:state.quantity+1,products:[...state.products, action.payload], total:state.total+action.payload.price*action.payload.quantity }
        }

        case REMOVE_PRODUCT:
            let newstate= {...state, quantity:state.quantity-1, total:state.total-action.payload.price*action.payload.quantity}
            newstate.products=newstate.products.filter((item)=>item._id!==action.payload._id)
            return newstate;
            
        default: return state
    }
} 


