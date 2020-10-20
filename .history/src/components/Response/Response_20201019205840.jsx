import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

export class Response extends Component {
  render() {
    return (
      <div className="response container">
        <div className="rating">
          <div className="score">
              <Skeleton circle={true} height={60} width={60} />
          </div>
        </div>
        <div className="user">
        <Skeleton circle={true} height={60} width={60} />

        </div>
        <p className="comment">
        <Skeleton circle={true} height={60} width={60} />
        </p>
      </div>
    );
  }
}

export default Response;
