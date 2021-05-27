import { useState } from 'react';
import { searchUser } from 'src/api';
import './search.scss';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      event.preventDefault();

      const response = await searchUser(searchInput);
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border flex items-center justify-center search-container">
      <input
        className="border-none focus:outline-none"
        type="search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={(event) => handleSearch(event)} type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
