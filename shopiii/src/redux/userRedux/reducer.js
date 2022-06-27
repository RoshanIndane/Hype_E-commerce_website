import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_USER } from "./action";



const initialState={
    currentUser:null,
    isFetching:false,
    error:false,

}


export const userReducer = (state = initialState , {type, payload}) =>{
    switch(type){
        case LOGIN_USER: 
            return {...state, isFetching : true};
        case LOGIN_SUCCESS : 
            return {...state, isFetching : false, currentUser : payload};
        case LOGIN_FAILURE : 
        return {...state, isFetching : false, error : true};
        
        default: 
            return state;
    }
}