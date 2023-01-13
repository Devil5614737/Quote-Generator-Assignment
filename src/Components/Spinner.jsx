import ClipLoader from "react-spinners/ClipLoader";

import React from 'react'

export const Spinner = ({color,size}) => {
  return (
    
    <ClipLoader
    color={color}
    size={size}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  )
}
