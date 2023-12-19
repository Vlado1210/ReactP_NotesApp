import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchBar = ({handleSearchText}) => {
  return (
    <div className='search'>
        <MdSearch/>
        <input onChange={(event)=> handleSearchText(event.target.value)}type='text' placeholder='Search Note'/>
    </div>
  )
}

export default SearchBar