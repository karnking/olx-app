import axios from "axios";
import { GET_AD, POST_AD, SET_ERROR, SET_LOADING } from "./action_type";

export const postAd = (obj) => async(dispatch) =>{
    dispatch({type:SET_LOADING})
    try{
        // console.log(obj)
        const res = await axios.post(`${process.env.REACT_APP_BASE_SERVER_URL}/classified/create`,obj)
        dispatch({type:POST_AD,payload:obj})
    }catch(error){
        dispatch({type:SET_ERROR})
    }
}
export const getAds = (obj) => async(dispatch) =>{
    dispatch({type:SET_LOADING})
    try{
        const res = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}/classified/`)
        console.log(res)
        dispatch({type:GET_AD,payload:res.data})
    }catch(error){
        dispatch({type:SET_ERROR})
    }
}