const API_URL = "https://sandbox.api.nps.today/reviews/reviewNames";

export const getSearch = (searchResults) => {
  fetch(API_URL).then((res) => {
    return searchResults(res);
  });
};
