import { GET_AD, POST_AD, SET_ERROR, SET_LOADING } from "./action_type"

const iniState = {
    ads : [],
    isLoading: false,
    isError: false,
}
export const reducer = (state=iniState,{type,payload}) => {
    switch(type){
        case SET_LOADING: return {...state,isLoading:true}
        case SET_ERROR: return {...state,isLoading:false,isError:true}
        case POST_AD: return {...state,isLoading:false,isError:false,ads:[...state.ads,payload]}
        case GET_AD: return {...state,isLoading:false,isError:false,ads:payload}
        default: return state
    }
}