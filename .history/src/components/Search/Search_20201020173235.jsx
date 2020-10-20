import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

// Method
import { getSearch } from "../../integrations/Search";

class Search extends Component {
  state = {
    organisationNames: [],
    searchResult: [],
    errorMessage: null,
  };

  async componentDidMount() {
    const organisations = await getSearch();
    this.setState({
      organisationNames: organisations,
    });
  }

  // searchHandler = (e) => {
  //   const searchValue = e.target.value.toLowerCase();
  //   if (searchValue === "") {
  //     this.setState({
  //       searchResult: [],
  //       errorMessage: "",
  //     });
  //   } else {
  //     this.setState(
  //       {
  //         searchResult: this.state.organisationNames.filter((p) =>
  //           p.includes(searchValue)
  //         ),
  //       },
  //       () => {
  //         if (this.state.searchResult.length === 0) {
  //           this.setState({ errorMessage: "No Results..." });
  //         } else {
  //           this.setState({ errorMessage: "" });
  //         }
  //       }
  //     );
  //   }
  // };

  searchHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (!searchValue) {
      this.setState({
        searchResult: [],
      });
    } else {
      const result = this.state.organisationNames.filter((orgName) => {
        return orgName.toLowerCase().includes(searchValue);
      });
      this.setState({
        searchResult: result,
      });
    }

    if (searchValue.length === 0 && this.state.searchResult.length === 0) {
      this.setState({
        errorMessage: "No Results...",
      });
    } else {
      this.setState({
        errorMessage: null,
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
                  <li>{res || <Skeleton />} </li>
                </Link>
              );
            })}
            {this.state.errorMessage === null ? (
              ""
            ) : (
              <li>{this.state.errorMessage}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
