import { URL } from './api';

export const getAnalytics = async (id) => {
  const res = await fetch(URL + 'analytics?orgId=' + id);
  const response = await res.json();
  return response;
};

export const getCompanyProfile = async (id) => {
  const res = await fetch(URL + '/organization/profile?orgId=' + id);
  const response = await res.json();
  return response;
};