import React from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import Comments from "../components/Comments/Comments";
import Sidebars from "../components/Sidebar/Sidebars";

const Home = () => {
  return (
    <main>
      <Analytics />
      <Sidebars />
      <Comments />
    </main>
  );
};

export default Home;
