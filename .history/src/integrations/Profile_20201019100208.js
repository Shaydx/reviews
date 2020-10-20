const API_URL = "https://sandbox.api.nps.today/reviews/organization/profile?orgId=";

export const getCompanyProfile = (id) => {
  fetch(API_URL + id)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};