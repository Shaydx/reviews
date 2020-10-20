import { URL } from "./api";

// export const getAnalytics = async (id) => {
//   const res = await fetch(URL + "analytics?orgId=" + id);
//   const response = await res.json();
//   return response;
// };

export const getCompanyProfile = async (id) => {
  const res = await fetch(URL + "/organization/profile?orgId=" + id);
  const response = await res.json();
  return response;
};

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