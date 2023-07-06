import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
