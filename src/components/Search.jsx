import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Implement search logic here
  };

  return (
    <div id="search" className="p-4">
      <input
        type="text"
        placeholder="Enter order ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={handleSearch} className="btn btn-primary ml-2">Search</button>
    </div>
  );
};

export default Search;