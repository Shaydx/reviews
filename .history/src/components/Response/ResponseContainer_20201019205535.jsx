import React, { Component } from "react";

// Components
import Response from "./Response";

class ResponseContainer extends Component {
  render(props) {
    return (
      <div id="responseContainer">
        <Response {...this.props} />
      </div>
    );
  }
}

export default ResponseContainer;
