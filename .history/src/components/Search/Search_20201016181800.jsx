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
    const searchValue = e.target.value.toLowerCase();

    const result = this.state.orgNames.filter((orgName) => {
      return orgName.reviewName.toLowerCase().includes(searchValue);
    });

    this.setState({
      searchResult: result,
    });

    console.log(this.state.searchResult);
  };

  // searchResultHandler = () => {
    
  // };

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
              <div className="searchResults">
                {this.state.searchResult.map(res => {
                  return <p>{res.reviewName}</p>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
