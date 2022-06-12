import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  count: localStorage.getItem("count") && !isNaN(localStorage.getItem("count")) ? parseInt(localStorage.getItem("count"))  : 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      localStorage.setItem("count", state.count + 1);
      return {
        ...state,
        count: state.count + 1,
      };

    case actionTypes.DECREMENT:
      localStorage.setItem("count", state.count - 1);

      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer;
