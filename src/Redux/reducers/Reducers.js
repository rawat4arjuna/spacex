import * as types from "../types";

const initalState = {
  data: [],
  success: [],
  loading: false,
  error: null,
};
export const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case types.REQUEST:
      return {
        ...state,
        request: action.payload,
        loading: true,
        error: null,
      };
    case types.SUCCESS:
      return {
        ...state,
        data: "",
        success: action.payload,
        loading: false,
        error: null,
      };
    case types.FAILURE:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case types.CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
