import React from "react";

const Analytics = (props) => {
  return (
    <div id="analytics" className="container">
      <div className="logo">Audika</div>
      <div className="analytics">
        <div className="gauge">
          <span>81</span>
        </div>
        <div className="name">{props.match.params.name}</div>
        <div className="total-respondents">
          3024 Besvarelser
          <span className="avg"> (8.4 Avg)</span>
        </div>
        <div className="spread">
          <div className="detractors">235</div>
          <div className="passive">670</div>
          <div className="promoters">2119</div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
