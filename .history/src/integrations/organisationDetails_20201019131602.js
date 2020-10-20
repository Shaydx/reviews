import { URL } from './api';

export const getAnalytics = (id) => {
  return fetch(URL + 'analytics?orgId=' + id)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};

export const getCompanyProfile = (id) => {
  return fetch(URL + '/organization/profile?orgId=' + id)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};