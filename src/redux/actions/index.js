export const SAVE_USER_INFO = 'SAVE_USER_INFO';

export const saveLogin = (name, email) => ({
  type: SAVE_USER_INFO,
  name,
  email,
});