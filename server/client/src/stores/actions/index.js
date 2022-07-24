import * as actionTypes from "./actionsTypes";
import axios from 'axios';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

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

export const handleToken = (token) => async dispatch => {
  const response = await axios.post('/api/stripe', token);
  return async (dispatch) => {
    dispatch(getUserID(response.data));
  }
}
