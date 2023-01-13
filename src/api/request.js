import axios from "axios";


const BaseUrl="https://api.quotable.io"




const getRandomQuote=()=>axios.get(`${BaseUrl}/random`)
const getQuoteByTag=(tag)=>axios.get(`${BaseUrl}/random?tags=${tag}`)

const getTags=()=>axios.get(`${BaseUrl}/tags`)


export {getRandomQuote,getTags,getQuoteByTag}        