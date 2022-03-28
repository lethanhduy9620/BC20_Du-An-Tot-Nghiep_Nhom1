import * as ActionType from "./constants"
import api from "../../../../../utils/apiUtils";
export const actLogin =(user,history) =>{
    return(dispatch) =>{
        dispatch(actLoginRequest());
        api.post("/auth/login",user)
        .then((result)=>{
            if(result.data.type == "ADMIN"){
                return Promise.reject(
                    {
                            data:{
                                content:"khong co quyen truy cap"
                            },
                    }
                );
            }
            localStorage.setItem("User",JSON.stringify(result.data));
            history.replace("/")
            dispatch(actLoginSuccess(result.data))
        })
        .catch((error)=>{
            dispatch(actLoginFailed(error))
        })
    }
}
export const actLoginRequest = () => {
    return {
        type: ActionType.LOGIN_REQUEST,
    }
}
export const actLoginSuccess = (data) => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
    }
}
export const actLoginFailed = (error) => {
    return {
        type: ActionType.LOGIN_FAILED,
        payload:error,
    }
}