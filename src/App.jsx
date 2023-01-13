import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Bookmarks from './Pages/Bookmarks';
import Home from './Pages/Home'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bookmarks' element={<Bookmarks/>}/>
    </Routes>
    </>

  )
}

export default App