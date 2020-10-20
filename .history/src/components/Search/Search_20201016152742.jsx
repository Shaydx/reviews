import React from "react";

const API_URL = "https://sandbox.api.nps.today/reviews/orgNames/";

fetch(API_URL)
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));

const Search = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <form className="search-form">
          <div className="form-group">
            <input
              type="search"
              name="search"
              placeholder="Search for company"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
