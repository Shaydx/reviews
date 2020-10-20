import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

// Method
import { getOrgIdByReviewName } from "../../integrations/orgIdByReviewName";
import { getCampaginIdByOrgId } from "../../integrations/campaginIdByOrgId";

export class Response extends Component {
  state = {
    orgId: null,
    responsesFromOrganisation: null,
  };

  async componentDidMount() {
    let reviewName = this.props.match.params.name;
    const orgId = await getOrgIdByReviewName(reviewName);
    const campgainId = await getCampaginIdByOrgId(orgId);

    this.setState({
      orgId: orgId,
      campgainId: campgainId,
    });

    console.log(this.state.campgainId + this.state.orgId);
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          illum? Fugit vel vero nostrum deleniti fugiat rerum quisquam illo
          incidunt? Distinctio, enim. Quo consequatur, accusamus nesciunt libero
          non perspiciatis debitis?
        </p>
      </div>
    );
  }
}

export default Response;
