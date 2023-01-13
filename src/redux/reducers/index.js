import { FETCH_QUOTE_FAILED, FETCH_QUOTE_REQUEST, FETCH_QUOTE_SUCCESS, FETCH_TAGS_FAILED, FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS,BOOKMARKQUOTE,REMOVEQUOTE } from "../constants";

const initalState={
    quote:{},
    tags:[],
    savedQuotes:[]
}

export const fetchTheQuote=(state=initalState,action)=>{
    const { type, payload } = action;
    switch (type){
    case FETCH_QUOTE_REQUEST:return {
            ...state,
            loading:true
        }
        case FETCH_QUOTE_SUCCESS: return {
            ...state,
            quote:payload,
            loading:false
        }
        case FETCH_QUOTE_FAILED: return {
            ...state,
            error:payload,
            loading:false
        }
        default: return state
    }
}


export const fetchTheTags=(state=initalState,action)=>{
    const { type, payload } = action;
    switch (type){
    case FETCH_TAGS_REQUEST:return {
            ...state,
            loading:true
        }
        case FETCH_TAGS_SUCCESS: return {
            ...state,
            tags:payload,
            loading:false
        }
        case FETCH_TAGS_FAILED: return {
            ...state,
            error:payload,
            loading:false
        }
        default: return state
    }
}


export const bookmarkTheQuote=(state=initalState,action)=>{
const {type,payload}=action;


switch (type){
    case BOOKMARKQUOTE:
const {data}=payload
return {
    ...state,
savedQuotes:[...state.savedQuotes,data]
}


case REMOVEQUOTE:
    

return {
    ...state,
    savedQuotes:state.savedQuotes.filter(quote=>quote._id!==payload)
}
    default :return state;
}
}