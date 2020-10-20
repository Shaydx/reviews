// const API_URL = "https://sandbox.api.nps.today/reviews/";

// export const getOrgIdByReviewName = (companyName, callback) => {
//   fetch(API_URL + companyName + "/orgId")
//     .then((res) => res.json())
//     .then((response) => {
//       return callback(response);
//     });
// };

export const doTheFetch = () => {
  const data =  fetch("https://sandbox.api.nps.today/reviews/reviewNames").then((res)=>{
      return res.json();
  }).then((json)=>{
      return new Promise((resolve, reject)=>{
          return resolve(json);
      })
  });
  return data;
}