import { URL } from "./api";

export const getResponsesByCampgainIds = (id) => {
  const data = fetch(URL + "/responses")
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
