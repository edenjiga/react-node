import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  ADD_CREDITS,
  SUBMIT_SURVEY,
  SUBMIT_SURVEY_SUCCESS
} from './types';

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

export const submitSurvey = (values, history) => {
  return {
    type: SUBMIT_SURVEY,
    payload: { ...values, history }
  };
};

export const submitSurveySuccess = data => {
  return { type: SUBMIT_SURVEY_SUCCESS, payload: data };
};
