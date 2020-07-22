import React from 'react';


const SearchBox = ({searchChange}) => {
  console.log('SearchBox')
  return(
    <div>
      <input
        className='pa3 ba b--green bg-lighttest-blue'
        type='text'
        placeholder='Search for a robot'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;