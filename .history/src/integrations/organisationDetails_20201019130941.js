import { URL } from './api';

export const getAnalytics = (id, callback) => {
  fetch(URL + 'analytics?orgId=' + id)
    .then((res) => res.json())
    .then((response) => {
      return callback(response);
    });
};

export const getCompanyProfile = (id, callback) => {
  fetch(API_URL + '/organization/profile?orgId=' + id)
    .then((res) => res.json())
    .then((response) => {
      return callback(response);
    });
};