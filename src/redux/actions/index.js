export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const SET_ON_DISPLAY = 'SET_ON_DISPLAY';

export const saveLogin = (name, email, isLogged) => ({
  type: SAVE_USER_INFO,
  isLogged,
  name,
  email,
});

export const setOnDisplay = (onDisplay, bookType) => ({
  type: SET_ON_DISPLAY,
  onDisplay,
  bookType,
});