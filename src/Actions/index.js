import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  GET_STREAMS,
  GET_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./type";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formvalues) => {
  return async (dispatch,getstate) => {
    const {userId} = getstate().auth
    const response = await streams.post("/streams", {...formvalues,userId});
    history.push("/")
    dispatch({
      type: CREATE_STREAM,
      payload:response.data
    });
  };
};

export const getStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  // console.log(response.data)
  dispatch({
    type: GET_STREAMS,
    payload: response.data,
  });
};

export const getStream = (id) => async (dispatch) => {
  const response = await streams.get(`streams/${id}`);
  dispatch({
    type: GET_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, formvalues) => async (dispatch) => {
  const response = await streams.patch(`streams/${id}`, formvalues);
  history.push("/")
  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`streams/${id}`);
  history.push("/")
  document.querySelector("#root").style.opacity="100%"
  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
};
