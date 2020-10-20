import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import { BrowserRouter as useParams } from "react-router-dom";

// Method
// import { getOrgIdByReviewName } from "../../integrations/Profile";
import { getAnalytics } from "../../integrations/Analytics";
import { getCompanyProfile } from "../../integrations/Profile";

let { id } = useParams();

class Analytics extends Component {
  state = {
    reviewName: {id},
    organisationProfile: null,
    analytics: null,
  };

  componentDidMount() {
    console.log(this.props.match.params.name);
  }

  // async componentDidMount() {
  //   // Analytics
  //   // // const analyticsResponse = await getAnalytics(callback);
  //   // this.setState({
  //   //   analytics: analyticsResponse,
  //   // });

  //   // Organisation Profile
  //   const organisationProfileResponse = await getCompanyProfile(id);
  //   console.log(organisationProfileResponse);
  //   this.setState({
  //     organisationProfile: organisationProfileResponse,
  //   });
  // }

  render() {
    return (
      <div id="analytics" className="container">
        <div className="logo">Audika</div>
        <div className="analytics">
          <div className="gauge">
            <span>81</span>
          </div>
          <div className="name">
            {JSON.stringify(this.state.organisationProfile) || <Skeleton />}
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
