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
      return orgName.reviewName.includes(searchValue);
    });

    this.setState({
        searchResult: result
    })

    console.log(this.state.searchResult);
  };

  render() {
    return (
      <div className="container">
        <div className="form-wrapper">
          <div className="search-form">
            <div className="form-group">
              <input
                type="search"
                placeholder="Search for company"
                onChange={this.searchHandler}
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
            <div className="form-group">
                {this.state.searchResult.reviewName}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
