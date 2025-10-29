import React from 'react'

const SearchBar = ({inputRef , onSearch , searchIcon}) => {
  return (
    <div className='search-bar'>
      <input ref={inputRef} type="text" placeholder='Search City...'/>
      <img src={searchIcon} alt="search" onClick={onSearch}/>
    </div>
  )
}

export default SearchBar;