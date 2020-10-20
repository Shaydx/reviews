import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

const API_URL = "https://sandbox.api.nps.today/reviews/reviewNames/";

class Search extends Component {
  state = {
    orgNames: [],
    searchResult: [],
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);

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
    if (!searchValue) {
      this.setState({
        searchResult: [],
      });
    } else {
      const result = this.state.orgNames.filter((orgName) => {
        return orgName.toLowerCase().includes(searchValue);
      });

      this.setState({
        searchResult: result,
      });
    }

    // DELETE THIS!!!!!!!
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
              <div className="searchResults">
                {this.state.searchResult.map((res) => {
                  return <Link to={"/r/" + res.reviewName}>{res.reviewName || <Skeleton />}</Link>;
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
