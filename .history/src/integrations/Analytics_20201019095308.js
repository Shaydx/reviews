const API_URL = "https://sandbox.api.nps.today/reviews/analytics?orgId=";

export const getAnalytics = (id) => {
  fetch(API_URL + id)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};
