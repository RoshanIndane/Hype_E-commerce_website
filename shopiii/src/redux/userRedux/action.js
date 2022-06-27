export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';



export const loginStart = (data)=> {
    return {
        type:LOGIN_USER,
        payload:data
    }
}

export const loginSucess = (data)=> {
    return {
        type:LOGIN_SUCCESS,
        payload:data
    }
}

export const loginFailure = ()=> {
    return {
        type:LOGIN_FAILURE
        
    }
}





// export const loginFailure = ()=> (
//     {type : LOGIN_FAILURE});
