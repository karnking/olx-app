import axios from "axios";
import { DELETE_AD, GET_AD, POST_AD, SET_ERROR, SET_LOADING } from "./action_type";

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
export const updateAd = (obj) => async(dispatch) =>{
    dispatch({type:SET_LOADING})
    try{
        await axios.put(`${process.env.REACT_APP_BASE_SERVER_URL}/classified/${obj['_id']}`,obj)
        dispatch(getAds())
    }catch(error){
        dispatch({type:SET_ERROR})
    }
}
export const getAds = (options) => async(dispatch) =>{
    dispatch({type:SET_LOADING})
    try{
        let query = ''
        if(options?.category!==''){
            query+=`category=${options?.category}`
        }
        let name = ''
        if(options?.name!=='') name = options.name
        if(options?.sort!=='') query+=`&sort=${options?.sort}`
        const res = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}/classified/${name}?${query}`)
        dispatch({type:GET_AD,payload:res.data})
    }catch(error){
        dispatch({type:SET_ERROR})
    }
}
export const deleteAd = (id) => async(dispatch) =>{
    dispatch({type:SET_LOADING})
    try{
        await axios.delete(`${process.env.REACT_APP_BASE_SERVER_URL}/classified/${id}`)
        dispatch(getAds())
    }catch(error){
        dispatch({type:SET_ERROR})
    }
}
