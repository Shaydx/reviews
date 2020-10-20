import { URL } from "./api";

export const getResponsesFromOrganisation = (id) => {
  const data = fetch(URL + "/campaignIds?orgId=" + id)
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
