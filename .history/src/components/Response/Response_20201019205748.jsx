import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

export class Response extends Component {
  render() {
    return (
      <div className="response container">
        <div className="rating">
          <div className="score">
            {this.props.state.responses === null ? (
              <Skeleton circle={true} height={60} width={60} />
            ) : (
              "Hello World"
            )}
          </div>
        </div>
        <div className="user">
          {this.state.responses === null ? (
            <Skeleton width={200} />
          ) : (
            "Hello World"
          )}
        </div>
        <p className="comment">
          {this.state.responses === null ? (
            <Skeleton count={4} />
          ) : (
            "Hello World"
          )}
        </p>
      </div>
    );
  }
}

export default Response;
