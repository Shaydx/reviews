const API_URL = "https://sandbox.api.nps.today/reviews/analytics?orgId=";

export const organisationDetails = (id, callback) => {
  fetch(API_URL + id)
    .then((res) => res.json())
    .then((response) => {
      return callback(response);
    });
};
