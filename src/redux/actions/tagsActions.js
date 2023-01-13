import { getTags } from "../../api/request";
import { FETCH_TAGS_FAILED, FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS } from "../constants";



export const fetchTags=()=>async(dispatch)=>{

    dispatch({
        type:FETCH_TAGS_REQUEST
    });

try {
    const {data}=await getTags()
    dispatch({
        type:FETCH_TAGS_SUCCESS,
        payload:data
    });
} catch (error) {
    dispatch({
        type:FETCH_TAGS_FAILED,
        payload:error
    });
}
    


}
