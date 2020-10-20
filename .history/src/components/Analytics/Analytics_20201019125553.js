import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

// Method
import { getOrgIdByReviewName } from "../../integrations/Profile";
import { getAnalytics } from "../../integrations/Analytics";
import { getCompanyProfile } from "../../integrations/Profile";

class Analytics extends Component {
  state = {
    reviewName: null,
    organisationProfile: null,
    analytics: null,
  };

  componentDidMount() {
    let reviewName = this.props.match.params.name;
    getOrgIdByReviewName(reviewName, (orgId) => {
      console.log(orgId);
    });
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
            {this.props.match.params.name || <Skeleton />}
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
