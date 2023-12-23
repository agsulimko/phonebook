import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common.Authorization;
};

export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  setToken(data.token);
  console.log(data);

  return data;
};

export const logIn = async body => {
  const { data } = await instance.post('/users/login', body);
  setToken(data.token);
  // console.log(data.user.name);
  // console.log(data.user.email);
  return data;
};

export const refresh = async body => {
  const { data } = await instance.get('/users/current', body);

  return data;
};
export const logOut = async body => {
  const { data } = await instance.post('/users/logout', body);

  deleteToken();

  console.log('token=>', data.token);
  return data;
};
