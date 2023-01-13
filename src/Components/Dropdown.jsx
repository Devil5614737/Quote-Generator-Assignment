import React from 'react';
import Select from 'react-select';

export const Dropdown = ({tags,setSelectedTag}) => {
    
  return (
    <Select
    className="dropdown"
    classNamePrefix="select"
options={tags.slice(1,tags.length-1)?.map(tag=>({
    label:tag.name,
    value: tag.name,
    key:tag._id
}))}
defaultValue=""
onChange={e=>setSelectedTag(e)}
  />
  )
}
