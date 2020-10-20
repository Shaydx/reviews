import React from "react";

// Components
import Analytics from "../components/Analytics/Analytics";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <main>
      <Analytics />
      <Comments />
      <Sidebar />
    </main>
  );
};

export default Home;
