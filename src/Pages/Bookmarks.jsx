import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../Components/Header';
import { Quote } from '../Components/Quote';
import '../styles/bookmarks.css'

function Bookmarks() {
const bookmarkState=useSelector(state=>state.bookmarkedQuotes)


const {savedQuotes:quotes}=bookmarkState



  return (
<>
<Header/>
<main>
  <div className="wrapper">
    {quotes.length>0?quotes.map(quote=>
  <Quote quote={quote}/>
      )
      :<p className='no_quote_text'>No quotes found</p>
    
    }
    
  </div>
</main>
</>
  )
}

export default Bookmarks