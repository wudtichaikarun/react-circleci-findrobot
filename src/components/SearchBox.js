import React from 'react';

const SearchBox = ({
  // searchfield,
  searchChange
}) => {
  console.log('searchBox');
  return (
    <div>
      <input
        aria-label="Search Robots"
        className="pa2 ba b--green bg-light-blue mb3"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
