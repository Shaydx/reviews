import React from "react";

const Home = () => {
  return (
    <div className="content-wrapper">
      <main id="frontpage">
        <div className="container">
          <div className="form-wrapper">
            <form className="login-form">
              <div className="form-group">
                <input type="text" name="username" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Login
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
