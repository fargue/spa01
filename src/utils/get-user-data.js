import axios from 'axios';

const BASE_URL = 'https://dba.dev.multiservice.com';
const DEV_BASE_URL = 'https://dba.dev.multiservice.com';

export {getOPLEVDEVUserData, getOPLEVBETUserData, getOPLEVPRDUserData};

function getOPLEVDEVUserData() {
  const url = `${BASE_URL}/api-rest/user/username/JRARNOLDDBA`;
  console.log('getting data');
  return axios.get(url).then(response => response.data);
}

function getAULEVDEVUserData() {
  const url = `${BASE_URL}/api-rest/user/username/JRARNOLDDBA`;
  return axios.get(url).then(response => response.data);
}

function getOPLEVBETUserData() {
  const url = `${BASE_URL}/api-rest/user/username/JRARNOLDDBA`;
  return axios.get(url).then(response => response.data);
}

function getOPLEVPRDUserData() {
  const url = `${BASE_URL}/api-rest/user/username/JRARNOLDDBA`;
  return axios.get(url).then(response => response.data);
}