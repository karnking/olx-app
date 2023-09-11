import axios from "axios";
import { POST_AD, SET_ERROR, SET_LOADING } from "./action_type";

export const postAd = (obj) => async(dispatch) =>{
    dispatch({type:SET_LOADING})
    try{
        const res = await axios.put(`http://localhost:8080/classified/create`,obj)
        dispatch({type:POST_AD,payload:obj})
    }catch(error){
        dispatch({type:SET_ERROR})
    }
}
export const getAds = (obj) => async(dispatch) =>{
    dispatch({type:SET_LOADING})
    try{
        const res = await axios.get(`http://localhost:8080/classified/`)
        console.log(res)
        dispatch({type:POST_AD,payload:obj})
    }catch(error){
        dispatch({type:SET_ERROR})
    }
}