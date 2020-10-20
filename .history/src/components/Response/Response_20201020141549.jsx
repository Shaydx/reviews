import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

export class Response extends Component {
  render() {
    return (
      <div className="response container">
        <div className="rating">
          <div className="score">
            {this.props.data.rating || (
              <Skeleton circle={true} height={60} width={60} />
            )}
          </div>
        </div>
        <div className="user">
          {this.props.data.respondent.firstName || <Skeleton width={200} />}
        </div>
        <p className="comment">
          {this.props.data.userComment || <Skeleton count={3} />}
        </p>
      </div>
    );
  }
}

export default Response;
