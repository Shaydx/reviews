import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

// Method
import { getOrgIdByReviewName } from "../../integrations/orgIdByReviewName";
import {
  getAnalytics,
  getCompanyProfile,
} from "../../integrations/organisationDetails";

class Analytics extends Component {
  state = {
    orgId: null,
    organisationProfile: null,
    analytics: null,
  };

  async componentDidMount() {
    let reviewName = this.props.match.params.name;
    const orgId = await getOrgIdByReviewName(reviewName);
    const analytics = await getAnalytics(orgId);
    const companyProfile = await getCompanyProfile(orgId);

    console.log(companyProfile);

    this.setState({
      orgId: orgId,
      organisationProfile: companyProfile,
      analytics: analytics,
    });
  }

  render() {
    return (
      <div id="analytics" className="container">
        <div className="logo">Audika</div>
        <div className="analytics">
          <div className="gauge">
            <span>
              {this.state.analytics === null ? (
                <Skeleton circle={true} height={50} width={50} />
              ) : (
                this.state.analytics.spread.total
              )}
            </span>
          </div>
          <div className="name">
            {this.state.organisationProfile === null ? (
              <Skeleton />
            ) : (
              this.state.organisationProfile.reviewName
            )}
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
