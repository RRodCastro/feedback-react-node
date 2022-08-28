import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const getUserID = (data) => {
  return {
    type: actionTypes.GET_USER,
    data: { user: data.googleId, credits: data.credits },
  };
};
export const getUser = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/current_user");
    if (response.data && response.data.googleId) {
      return dispatch(getUserID(response.data));
    }
    dispatch(getUserID(false));
  };
};

export const handleToken = (token) => {
  return async (dispatch) => {
    const response = await axios.post("/api/stripe", token);
    dispatch(getUserID(response.data));
  };
};

export const saveSurvey = (survey, navigate) => {
  return async (dispatch) => {
    const response = await axios.post("/api/surveys", survey);
    dispatch({
      type: actionTypes.SET_SURVEY,
      data: { survey: {} },
    });
    dispatch({
      type: actionTypes.GET_USER,
      data: { user: response.data.googleId, credits: response.data.credits },
    });
    navigate('/surveys');
  };
};

export const getSurveys = () => {
  return async (dispatch) => {
    const surveys = await axios.get("/api/surveys");
    dispatch({
      type: actionTypes.GET_SURVEYS,
      data: surveys.data,
    });
  };
};
