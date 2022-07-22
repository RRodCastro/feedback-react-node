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

export const getUserID = (userID) => {
  return {
    type: actionTypes.GET_USER,
    data: { user: userID },
  };
};
export const getUser = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/current_user");
    if (response.data && response.data.googleId) {
      return dispatch(getUserID(response.data.googleId));
    }
    dispatch(getUserID(false));

  };
};

export const handleToken = (token) => async dispatch => {
  const response = await axios.post('/api/stripe', token);
  return async (dispatch) => {
    console.log("handling token")
    console.log(response);
    dispatch({type: actionTypes.GET_USER, data: { user: response.data.googleId }})
  }
}
