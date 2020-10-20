import React from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import Comments from "../components/Comments/Comment";
import Sidebars from "../components/Sidebars/Sidebars";

const Home = () => {
  return (
    <div id="content-wrapper">
      <main>
        <Analytics />
        <Comments />
      </main>
      <aside>
        <Sidebars />
      </aside>
    </div>
  );
};

export default Home;
