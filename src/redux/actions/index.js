export const SAVE_USER_INFO = 'SAVE_USER_INFO';

export const saveLogin = (name, email, isLogged) => ({
  type: SAVE_USER_INFO,
  isLogged,
  name,
  email,
});