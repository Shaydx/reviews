import { URL } from "./api";

export const getAnalytics = (id) => {
  const data = fetch(URL + "analytics?orgId=" + id)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    return new Promise((resolve, reject) => {
      return resolve(json);
    })
  })
  return data;
}

export const getCompanyProfile = (id) => {
  const data = fetch(URL + "/organization/profile?orgId=" + id)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    return new Promise((resolve, reject) => {
      return resolve(json);
    })
  })
  return data;
}