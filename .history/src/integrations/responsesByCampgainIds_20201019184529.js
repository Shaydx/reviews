import { URL } from "./api";

// export const getResponsesByCampgainIds = (id) => {
//   const data = fetch(URL + "/responses?skip=0&take=10", {
//     method: "POST",
//     body: JSON.stringify(id),
//   })
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

export const getResponsesByCampgainIds = (id) => {
  const response = fetch(URL + "/responses?skip=0&take=10", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });

  return response.json();
};
