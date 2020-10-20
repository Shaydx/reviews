import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

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
      <div className="container">
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
          <ul className="searchResults">
            {this.state.searchResult.map((res, key) => {
              return (
                <li key={key}>
                  <Link to={"/r/" + res}>{res || <Skeleton />}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
