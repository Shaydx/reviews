import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";

// Method
import { getSearch } from "../../integrations/Search";

class Search extends Component {
  state = {
    orgNames: [],
    searchResult: [],
  };

  componentDidMount() {
    getSearch((getSearchResults) => {
      this.setState({
        orgNames: getSearchResults,
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
      const result = this.state.orgNames.filter((orgName, key) => {
        return orgName.toLowerCase().includes(searchValue);
      });
      this.setState({
        searchResult: result,
      });
    }
  };

  render() {
    return (
      <div className="search">
        <div className="form-group">
          <input
            type="search"
            placeholder="Search for company"
            onChange={this.searchHandler}
          />
        </div>
        <div className="search-result-wrapper">
          <ul className="search-results">
            {this.state.searchResult.map((res, key) => {
              return (
                <Link key={key} to={"/r/" + res}>
                  <li>{res.length === null ? "No Results..." : res} </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
