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
                this.state.analytics.spread.nps
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
            {this.state.analytics === null ? (
              <Skeleton />
            ) : (
              this.state.analytics.spread.total +
              " Besvarelser" +
              " (" +
              this.state.analytics.averageRating +
              " Avg)"
            )}
            <span className="avg"></span>
          </div>
          <div className="spread">
            <div className="detractors">{this.state.analytics === null ? <Skeleton /> : this.state.analytics.spread.detractors}</div>
            <div className="passive">{this.state.analytics === null ? <Skeleton /> : this.state.analytics.passive.detractors}</div>
            <div className="promoters">{this.state.analytics === null ? <Skeleton /> : this.state.analytics.spread.detractors}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
