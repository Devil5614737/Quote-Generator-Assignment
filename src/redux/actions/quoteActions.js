import { getQuoteByTag, getRandomQuote } from "../../api/request";
import { BOOKMARKQUOTE, FETCH_QUOTE_REQUEST, FETCH_QUOTE_SUCCESS, REMOVEQUOTE } from "../constants"


export const fetchQuote=(tag)=>async(dispatch)=>{

    dispatch({
        type:FETCH_QUOTE_REQUEST
    });

try {
    if(tag){
        const {data}=await getQuoteByTag(tag)
        dispatch({
            type:FETCH_QUOTE_SUCCESS,
            payload:data
        });
    }else{
        const {data}=await getRandomQuote()
        dispatch({
            type:FETCH_QUOTE_SUCCESS,
            payload:data
        });
    }
} catch (error) {
    dispatch({
        type:FETCH_QUOTE_ERROR,
        payload:error
    });
}

}


export const bookmarkQuote=(quote)=>{
    const quoteData={
data:quote
    }
    return ({
type:BOOKMARKQUOTE,
payload:quoteData
    })

}
export const removeQuote=(quoteId)=>{

    return({
        type:REMOVEQUOTE,
        payload:quoteId
    })
}
