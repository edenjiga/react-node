import { FETCH_USER, FETCH_USER_SUCCESS } from './types';

export const fetchUser = () => ({
  type: FETCH_USER
});

export const fetchUserSuccess = data => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data
  };
};
