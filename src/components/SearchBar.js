import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flex w-100 relative h-[100%]">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter your search term..."
        className="w-[100%] h-[100%] border border-hidden text-left absolute p-2"
      />
      <BiSend className = "w-6 h-10 absolute right-4 "
      onClick={handleSubmit} />
    </div>
  );
};

export default SearchBar;
