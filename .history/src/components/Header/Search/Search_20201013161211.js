import React from "react";

import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Søg efter virksomhed..."
      />
    </div>
  );
};

export default Search;
