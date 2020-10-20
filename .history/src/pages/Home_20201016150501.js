import React from "react";

const Home = () => {
  return (
    <div className="content-wrapper">
      <main id="frontpage">
        <div className="container">
          <div className="form-wrapper">
            <form className="search-form">
              <div className="form-group">
                <input type="search" name="search" placeholder="Search for company" />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
