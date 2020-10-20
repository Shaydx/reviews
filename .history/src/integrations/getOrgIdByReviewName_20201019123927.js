

const API_URL = "https://sandbox.api.nps.today/reviews/";

export const getOrgIdByReviewName = (companyName, callback) => {
  fetch(API_URL + companyName + "/orgId")
    .then((res) => res.json())
    .then((response) => {
      return callback(response);
    });
};
