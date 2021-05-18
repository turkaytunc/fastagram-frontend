import { useState } from 'react';
import './search.scss';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="border flex items-center justify-center search-container">
      <input
        className="border-none focus:outline-none"
        type="search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
    </div>
  );
};

export default Search;
