import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  userId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        userId: action.data.user,
        credits: action.data.credits,
      };

    default:
      return state;
  }
};

export default reducer;
