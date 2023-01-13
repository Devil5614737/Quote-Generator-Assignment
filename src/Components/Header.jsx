import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const location=useLocation()

  const {pathname:path}=location
  
  return (
    <header>
  <nav className="nav">
    <Link style={{
      fontWeight:path==='/'?'bold':'normal'
    }} to='/'>Home</Link>
    <Link style={{
      fontWeight:path==='/bookmarks'?'bold':'normal'
    }} to='/bookmarks'>Bookmarks</Link>
  </nav>
</header>
  )
}
