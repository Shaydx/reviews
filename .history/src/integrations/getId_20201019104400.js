const API_URL = "https://sandbox.api.nps.today/reviews/";

export const getCompanyProfile = (companyName) => {
  fetch(API_URL + companyName + '/orgId')
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};