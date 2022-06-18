import * as actionTypes from "./actionsTypes";

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
    const response = await fetch("/api/current_user");
    const user = await response.json();
    if (user && user.googleId) {
      dispatch(getUserID(user.googleId));
    }
  };
};
