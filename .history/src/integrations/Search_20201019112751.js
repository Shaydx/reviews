const API_URL = "https://sandbox.api.nps.today/reviews/reviewNames/";

export const Search = () => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
        return response;
    });
};
