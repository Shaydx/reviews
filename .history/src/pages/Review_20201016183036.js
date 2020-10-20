import React from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import ResponseContainer from "../components/Response/ResponseContainer";
import Sidebars from "../components/Sidebars/Sidebars";

const Review = (props) => {
  return (
    <div id="review-page" className="content-wrapper">
      <main id="review">
        <Analytics {...props} />
        <ResponseContainer {...props} />
      </main>
      <aside>
        <Sidebars />
      </aside>
    </div>
  );
};

export default Review;
