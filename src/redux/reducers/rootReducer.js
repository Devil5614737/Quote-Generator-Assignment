import { combineReducers } from "redux";
import { fetchTheQuote ,fetchTheTags,bookmarkTheQuote} from "./index";



export const rootReducer=combineReducers({
    quote:fetchTheQuote,
    tags:fetchTheTags,
    bookmarkedQuotes:bookmarkTheQuote
})