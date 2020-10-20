import React, { Component } from "react";

const API_URL = "https://sandbox.api.nps.today/reviews/orgNames/";

export class Search extends Component {
  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((response) => {
        return response;
      });
  }

  render() {
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
  }
}

export default Search;
