import {useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/searchresults/${searchTerm}`);
  };

  return (
    <form className='search-bar-form' onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;