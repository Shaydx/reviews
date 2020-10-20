import React from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import Comments from "../components/Comments/Comments";
import Sidebars from "../components/Sidebars/Sidebars";

const Audika = () => {
  return (
    <div id="review-page" className="content-wrapper">
      <main id="review">
        <Analytics />
        <Comments />
      </main>
      <aside>
        <Sidebars />
      </aside>
    </div>
  );
};

export default Audika;
