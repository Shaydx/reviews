import React from "react";

const Analytics = () => {
  return (
    <div id="analytics" className="container">
      <div className="logo">Audika</div>
      <div className="analytics">
        <div className="gauge">
          <span>81</span>
        </div>
        <div className="name">Audika</div>
        <div className="total-respondents">
          3024 Besvarelser
          <span className="avg"></span>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
