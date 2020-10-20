import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

// Method
import { getOrgIdByReviewName } from "../../integrations/orgIdByReviewName";
import { getCampaginIdByOrgId } from "../../integrations/campaginIdByOrgId";
import { getResponsesByCampgainIds } from "../../integrations/responsesByCampgainIds";

export class Response extends Component {
  state = {
    orgId: null,
    responsesFromOrganisation: null,
  };

  async componentDidMount() {
    let reviewName = this.props.match.params.name;
    const orgId = await getOrgIdByReviewName(reviewName);
    const campgainIds = await getCampaginIdByOrgId(orgId);
    const responsesbyId = await getResponsesByCampgainIds(campgainIds);

    console.log(responsesbyId);

    this.setState({
      orgId: orgId,
      campgainId: campgainIds,
      responses: responsesbyId,
    });

    console.log(this.state.campgainId);
  }

  render() {
    return (
      <div className="response container">
        <div className="rating">
          <div className="score">10</div>
        </div>
        <div className="user">
          Jesper <span>22.08.2020</span>
        </div>
        <p className="comment">
          {this.state.organisationProfile === null ? (
            <Skeleton count={4} />
          ) : (
            this.state.organisationProfile.reviewName
          )}
        </p>
      </div>
    );
  }
}

export default Response;
