import React, { Component } from "react";

const API_URL = "https://sandbox.api.nps.today/reviews/analytics?orgId=";

export class Analytics extends Component {
  state = {
    company: [],
  };

  componentDidMount() {
    fetch(API_URL + this.props.match.params.id)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          company: response,
        });
      });
  }

  render() {
    return (
      <div id="analytics" className="container">
        <div className="logo">Audika</div>
        <div className="analytics">
          <div className="gauge">
            <span>81</span>
          </div>
          <div className="name">{JSON.stringify(this.state.company)}</div>
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
