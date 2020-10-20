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
  fetch(URL + "/responses?skip=0&take=10", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: id,
  });

  console.log(id)
};
