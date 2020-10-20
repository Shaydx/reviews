import React, { Component } from "react";
// import Skeleton from "react-loading-skeleton";

// Components
import Response from "./Response";

import { getOrgIdByReviewName } from "../../integrations/orgIdByReviewName";
import { getCampaginIdByOrgId } from "../../integrations/campaginIdByOrgId";
import { getResponsesByCampgainIds } from "../../integrations/responsesByCampgainIds";

class ResponseContainer extends Component {
  state = {
    orgId: null,
    responsesFromOrganisation: null,
    responses: [],
  };

  async componentDidMount() {
    let reviewName = this.props.match.params.name;
    const orgId = await getOrgIdByReviewName(reviewName);
    const campgainIds = await getCampaginIdByOrgId(orgId);
    const responsesbyId = await getResponsesByCampgainIds(campgainIds);

    this.setState({
      orgId: orgId,
      campgainId: campgainIds,
      responses: responsesbyId,
    });
  }

  render() {
    return (
      <div id="responseContainer">
        {console.log(this.state.responses)}
        {this.state.responses.map((res, key) => {
          return <Response key={key} {...this.props} />;
        })}
      </div>
    );
  }
}

export default ResponseContainer;
