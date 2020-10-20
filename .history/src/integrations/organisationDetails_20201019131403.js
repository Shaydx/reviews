import { URL } from './api';

export const getAnalytics = (id) => {
  fetch(URL + 'analytics?orgId=' + id)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};

export const getCompanyProfile = (id) => {
  fetch(URL + '/organization/profile?orgId=' + id)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};