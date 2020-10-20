import React from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import Comments from "../components/Comments/Comments";
import Sidebars from "../components/Sidebars/Sidebars";

const Home = () => {
  return (
    <main>
      <Analytics />
      <Comments />
    </main>
    <aside>
     <Sidebars />
    </aside>
  );
};

export default Home;
