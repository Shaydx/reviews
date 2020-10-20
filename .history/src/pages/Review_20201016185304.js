import React, { Component } from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import ResponseContainer from "../components/Response/ResponseContainer";
import Sidebars from "../components/Sidebars/Sidebars";

class Review extends Component {
  render() {
    return (
      <div id="review-page" className="content-wrapper">
        <main id="review">
          <Analytics {...this.props} />
          <ResponseContainer {...this.props} />
        </main>
        <aside>
          <Sidebars />
        </aside>
      </div>
    );
  }
}

export default Review;
