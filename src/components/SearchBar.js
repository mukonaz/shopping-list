import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../redux/actions/shoppingActions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(fetchItems(e.target.value)); // Assuming this fetches based on search query
  };

  return (
    <input
      type="text"
      placeholder="Search items..."
      value={query}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
