import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  count: 0,
  userId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

      case actionTypes.GET_USER:
        return {
          ...state,
          userId: action.data.user,
        };

    default:
      return state;
  }
};

export default reducer;
