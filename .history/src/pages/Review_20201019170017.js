import React, { Component } from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import ResponseContainer from "../components/Response/ResponseContainer";
import Sidebars from "../components/Sidebars/Sidebars";

class Review extends Component {
  state = {
    receivedProps: false,
  };

  componentDidUpdate(prevProps) {
    if (this.state.receivedProps === false && prevProps !== this.props) {
      this.props.fetchReviewName();
      this.setState({
        receivedProps: true,
      });
    }
  }

  render() {
    return (
      <div id="review-page" className="content-wrapper">
        <main id="review">
          <Analytics {...this.props} />
          <ResponseContainer {...this.props} />
        </main>
        <aside>
          <Sidebars {...this.props} />
        </aside>
      </div>
    );
  }
}

export default Review;
