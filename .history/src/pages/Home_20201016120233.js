import React from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import Comments from "../components/Comments/Comments";
import Sidebars from "../components/Sidebars/Sidebars";

const Home = () => {
  return (
    <div id="frontpage" className="content-wrapper">
      <main id="home">
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
