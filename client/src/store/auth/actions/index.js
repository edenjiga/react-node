import { FETCH_USER, FETCH_USER_SUCCESS, ADD_CREDITS } from './types';

export const addCredits = token => {
  return {
    type: ADD_CREDITS,
    payload: token
  };
};

export const fetchUser = () => ({
  type: FETCH_USER
});

export const fetchUserSuccess = data => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data
  };
};
