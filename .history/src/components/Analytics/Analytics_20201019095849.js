import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

// Method
import { getAnalytics } from "../../integrations/Analytics";

const id = '7830c7f4-99ef-4b26-9bde-b2d0cb127663';

class Analytics extends Component {
  state = {
    company: [],
  };

  async componentDidMount() {
    const response = await getAnalytics(id);
    this.setState({
      company: response,
    });
  }

  console.log(company);


  render() {
    return (
      <div id="analytics" className="container">
        <div className="logo">Audika</div>
        <div className="analytics">
          <div className="gauge">
            <span>81</span>
          </div>
          <div className="name">
            {JSON.stringify(this.state.reviewName) || <Skeleton />}
          </div>
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
  }
}

export default Analytics;
