import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from '../Components/Dropdown';
import { Header } from '../Components/Header';
import { Quote } from '../Components/Quote';
import { Spinner } from '../Components/Spinner';
import { fetchQuote } from '../redux/actions/quoteActions';
import { fetchTags } from '../redux/actions/tagsActions';
import '../styles/home.css';


function Home() {
    
const[selectedTag,setSelectedTag]=useState("")

  const dispatch=useDispatch();

  const quoteState=useSelector(state=>state.quote)
  const tagsState=useSelector(state=>state.tags)


const {quote,loading}=quoteState
const {tags}=tagsState




useEffect(()=>{
dispatch(fetchQuote())
dispatch(fetchTags())
},[])




  return (
<>
<Header/>
<main>
  <div className="wrapper">
  <Quote quote={quote}/>
  <Dropdown setSelectedTag={setSelectedTag} tags={tags}/>
  <motion.button
  whileTap={{
    scale:.9
  }}
  onClick={()=>dispatch(fetchQuote(selectedTag.value))} className='next_quote__btn'>
    {loading?<Spinner size={22} color='white'/>:
    "Next Quote"
  }
  </motion.button>
    
  </div>
</main>
</>
  )
}

export default Home