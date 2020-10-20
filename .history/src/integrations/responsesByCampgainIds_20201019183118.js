import { URL } from "./api";

export const getResponsesByCampgainIds = (id) => {
  const data = fetch(URL + "/responses?skip=0&take=10", {
    method: "POST",
    body: id,
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return new Promise((resolve, reject) => {
        return resolve(json);
      });
    });
  return data;
};
