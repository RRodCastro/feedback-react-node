import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  survey: {},
  surveys: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SURVEY:
      return {
        ...state,
        survey: {
          ...state.survey,
          [action.data.name]: action.data.value,
        },
      };
    case actionTypes.GET_SURVEYS:
      return {
        ...state,
        surveys: action.data
      }
    case actionTypes.SET_SURVEY:
      return {
        ...state,
        survey: action.data.survey,
      }
    default:
      return state;
  }
};

export default reducer;
