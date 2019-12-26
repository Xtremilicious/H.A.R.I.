import axios from "axios";
import {
  LOGIN,
  LOGOUT,
  LOADING_UI,
  UNLOADING_UI,
  SET_ERRORS,
  UNSET_ERRORS,
  SET_USER
} from "./constants.js";

export const login = () => ({
  type: LOGIN
});

export const setUser = user => ({
  type: SET_USER,
  user
});

export const startSignUp = newUser => {
  return dispatch => {
    dispatch({ type: LOADING_UI });
    axios
      .post("/api/user/register", { ...newUser })
      .then(res => {
        console.log(res.data);
        setAuthorizationHeader(res.data.token);
        dispatch(setUser(res.data.user));
        saveUserToLocalStorage(res.data.user);
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: "SET_ERRORS",
          error: err.response
            ? err.response.data.general ||
              err.response.data.email ||
              err.response.data.password ||
              err.response.data.error ||
              err.response.data.handle
            : ""
        });
      });
  };
};

export const startLogin = credentials => {
  return dispatch => {
    dispatch({ type: LOADING_UI });
    return axios
      .post("http://localhost:5000/api/user/login", credentials)
      .then(res => {
        console.log(res.data.token);
        setAuthorizationHeader(res.data.token);
        dispatch(setUser(res.data.user));
        saveUserToLocalStorage(res.data.user);

        dispatch({ type: UNLOADING_UI });
        dispatch(login());
      })
      .catch(err => {
        dispatch({
          type: SET_ERRORS,
          error: err.response ? err.response.data.message : ""
        });
      });
  };
};

export const logout = () => ({
  type: LOGOUT
});

export const startLogout = () => {
  return dispatch => {
    sessionStorage.removeItem("FBIdToken");
    delete axios.defaults.headers.common["Authorization"];
    dispatch(logout());
  };
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  sessionStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

export const saveUserToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("user", serializedState);
  } catch (e) {
    console.log(e);
  }
};
