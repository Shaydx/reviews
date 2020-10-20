import React, { Component } from "react";

// Method
import { getOrgIdByReviewName } from "../../integrations/orgIdByReviewName";
import { getResponsesFromOrganisation } from "../../integrations/responsesFromOrganisation";

export class Response extends Component {
  state = {
    orgId: null,
    responsesFromOrganisation: null
  }

  async componentDidMount() {
    let reviewName = this.props.match.params.name;
    const orgId = await getResponsesFromOrganisation(reviewName);
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
