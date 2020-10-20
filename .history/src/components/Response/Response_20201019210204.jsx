import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

export class Response extends Component {
  render(props) {
    return (
      <div className="response container">
        <div className="rating">
          <div className="score">{props.results.respondent.firstName}</div>
        </div>
        <div className="user">
          <Skeleton />
        </div>
        <p className="comment">
          <Skeleton />
        </p>
      </div>
    );
  }
}

export default Response;
