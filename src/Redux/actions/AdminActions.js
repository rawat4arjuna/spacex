import * as types from "../types";
import axios from "axios";
import Error from "../Utils/Error";
export const AdminLogin = (payload) => async (dispatch) => {
  console.warn(payload);
  dispatch({
    type: types.REQUEST,
    payload: payload,
  });
  axios({
    method: "POST",
    url: "api/admin",
    data: {
      ...payload,
    },
  })
    .then((res) => {
      dispatch({
        type: types.SUCCESS,
        payload: res,
      });
    })
    .catch(async (error) => {
      dispatch({
        type: types.FAILURE,
        payload: await Error(error),
      });
    });
};
