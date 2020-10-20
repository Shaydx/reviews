import React from "react";

const Home = () => {
  return (
    <div className="content-wrapper">
      <main id="frontpage">
        <div className="container">
          <div className="form-wrapper">
            <form className="login-form" onSubmit={this.props.loginHandler}>
              <div className="form-group">
                <label htmlFor="username">
                  <span>Username</span>
                </label>
                <input type="text" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <span>Password</span>
                </label>
                <input type="password" name="password" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <button type="submit" className="btn btn-link">
                  Register
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
