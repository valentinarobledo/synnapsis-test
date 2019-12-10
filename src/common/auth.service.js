const ID_TOKEN_KEY = "id_token";
const USER_DATA = "user";

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const getUser = () => {
  var user = window.localStorage.getItem(USER_DATA);
  return user ? JSON.parse(user) : null;
};

export const saveToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const saveUser = user => {
  window.localStorage.setItem(USER_DATA, JSON.stringify(user));
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const destroyUser = () => {
  window.localStorage.removeItem(USER_DATA);
};

export default {
  getToken,
  saveToken,
  destroyToken,
  destroyUser,
  getUser,
  saveUser
};
