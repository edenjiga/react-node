import { FETCH_SURVEYS, FETCH_SURVEYS_SUCCESS } from './types';

export const fetchSurveys = () => ({
  type: FETCH_SURVEYS
});

export const fetchSurveySuccess = data => {
  return { type: FETCH_SURVEYS_SUCCESS, payload: data };
};
