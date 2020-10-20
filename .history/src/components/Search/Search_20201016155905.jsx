import React, { Component } from "react";

const API_URL = "https://sandbox.api.nps.today/reviews/orgNames/";

class Search extends Component {
  state = {
    orgNames: [],
    searchResult: [],
  };

  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          orgNames: response,
        });
      });
  }

  searchHandler = (e) => {
    const searchValue = e.target.value;

    const result = this.state.orgNames.filter((orgName) => {
      return orgName.includes(searchValue);
    });

    console.log(result);
  };

  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
          <div className="search-form">
            <div className="form-group">
              <input
                type="search"
                name="search"
                placeholder="Search for company"
                onChange={this.searchHandler}
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
