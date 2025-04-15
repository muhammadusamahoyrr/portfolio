import React, { useState } from 'react'

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="relative max-w-md mx-auto mt-4">
      <input
        type="text"
        placeholder="Search a Project"
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-6 py-3 text-base text-gray-700 placeholder-gray-400 
        border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 
        transition-all duration-300 bg-white/10 backdrop-blur-sm
        dark:bg-black/20 dark:text-white dark:border-gray-700"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
    </div>
  )
}

export default SearchComponent