import { URL } from './api';

export const getAnalytics = (id) => {
  return fetch(URL + 'analytics?orgId=' + id)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};

export const getCompanyProfile = async (id) => {
  const res = await fetch(URL + '/organization/profile?orgId=' + id);
  const response = await res.json();
  return response;
};