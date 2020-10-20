import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

// Components
import Response from "./Response";

import { getOrgIdByReviewName } from "../../integrations/orgIdByReviewName";
import { getCampaginIdByOrgId } from "../../integrations/campaginIdByOrgId";
import { getResponsesByCampgainIds } from "../../integrations/responsesByCampgainIds";

class ResponseContainer extends Component {
  state = {
    orgId: null,
    responsesFromOrganisation: null,
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

  responseHandler = () => {
    const comments = this.state.responses.results.map((comment, key) => {
      return comment;
    })
  }

  render(props) {
    return (
      <div id="responseContainer">
        <Response {...this.props} />
      </div>
    );
  }
}

export default ResponseContainer;
