const API_URL = "https://sandbox.api.nps.today/reviews/reviewNames";

export const getSearch = (callback) => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      return callback(response);
    });
};


// import { URL } from "./api";

// export const getOrgIdByReviewName = (companyName) => {
//   const data = fetch(URL + companyName )
//     .then((res) => {
//       return res.json();
//     })
//     .then((json) => {
//       return new Promise((resolve, reject) => {
//         return resolve(json);
//       });
//     });
//   return data;
// };