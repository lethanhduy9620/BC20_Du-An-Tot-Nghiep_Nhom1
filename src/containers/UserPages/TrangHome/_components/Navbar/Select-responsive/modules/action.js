import * as ActionType from "./constant";
import api from "../../../../../../../utils/apiUtils";
const actSelect = () =>{
    return(dispatch)=>{
        dispatch(actSelectRequest())

        api
        .get("locations")
        .then((result)=>{
            dispatch(actSelectSuccess(result.data))
        })
        .catch((error)=>{
            dispatch(actSelectFailed(error))
        })
    }    
}
const actSelectRequest = ()=>{
    return{
        type:ActionType.SELECT_REQUEST
    }
}
const actSelectSuccess = (data) =>{
    return{
        type:ActionType.SELECT_SUCCESS,
        payload: data,
    }
}
const actSelectFailed = (error) =>{
    return{
        type:ActionType.SELECT_FAILED,
        payload: error,
    }
}
export default actSelect;