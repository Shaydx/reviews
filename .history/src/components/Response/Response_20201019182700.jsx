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
      responses: null,
    });

    console.log(this.state.campgainId);
  }

  render() {
    return (
      <div className="response container">
        <div className="rating">
          <div className="score">
          {this.state.responses === null ? (
          <Skeleton circle={true} height={50} width={50} />;
          ) : (
            "Hello World"
          )}
          </div>
        </div>
        <div className="user">
          {this.state.responses === null ? (
            <Skeleton width={200} />
          ) : (
            "Hello World"
          )}
        </div>
        <p className="comment">
          {this.state.responses === null ? (
            <Skeleton count={4} />
          ) : (
            "Hello World"
          )}
        </p>
      </div>
    );
  }
}

export default Response;
