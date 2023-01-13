
export const isSavedBookmark=(quotesState,quote)=>{
    if(quotesState.savedQuotes.find(savedQuote=>savedQuote._id===quote._id)){
      return true
    }else{
      return false
    }
    }
    