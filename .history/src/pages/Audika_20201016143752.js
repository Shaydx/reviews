import React from "react";

const Audika = () => {
    return(
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
}

export default Audika;