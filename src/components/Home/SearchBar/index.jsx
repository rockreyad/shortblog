import React from "react";

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <div className="flex justify-center items-center ">
      <form onSubmit={formSubmit} className="flex bg-gray-200 rounded p-1">
        <input
          type="text"
          placeholder="Search by Category"
          value={value}
          onChange={handleSearchKey}
          className="rounded px-2 outline-none border-none bg-gray-200"
        />

        {value && (
          <span onClick={clearSearch} className="pr-0.5 cursor-pointer">
            X
          </span>
        )}
        <button className="bg-blue-600 text-white rounded px-2  outline-none border-none">
          Go
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
