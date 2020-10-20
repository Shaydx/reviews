import React from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import Comments from "../components/Comments/Comments";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <main>
      <Analytics />
      <Sidebar />
      <Sidebar />
      <Comments />
    </main>
  );
};

export default Home;
