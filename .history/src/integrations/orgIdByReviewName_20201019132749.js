import { URL } from "./api";

export const getOrgIdByReviewName = () => {
  const data =  fetch(URL + companyName + "/orgId")
  .then((res)=>{
      return res.json();
  }).then((json)=>{
      return new Promise((resolve, reject)=>{
          return resolve(json);
      })
  });
  return data;
}
