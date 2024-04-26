import axios from "axios";
import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  CONTACT_USERS_FAIL,
  CONTACT_USERS_REQUEST,
  CONTACT_USERS_SUCCESS,
} from "../constants/Auth";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `https://lms-mern-3.onrender.com/api/auth/register`,
      userData,
      config
    );
    console.log(data);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    const user = localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `https://lms-mern-3.onrender.com/api/auth/login`,
      { email, password },
      config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data });
  }
};

export const forgotPassword = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `https://lms-mern-3.onrender.com/api/auth/password/forgot`,
      myForm,
      config
    );
    console.log(data);
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD_FAIL, payload: error.response.data });
  }
};

export const restPassword = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `https://lms-mern-3.onrender.com/api/auth/password/reset`,
      myForm,
      config
    );
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const userDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://lms-mern-3.onrender.com/api/auth/getuser/${id}`
    );
    console.log(data);
    console.log(id);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

export const updateProfile = (myForm, id, imgId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.put(
      `https://lms-mern-3.onrender.com/api/auth/updateProfile/${id}?img=${imgId}`,
      myForm,
      config
    );
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.response.data });
  }
};

export const updatePassword = (myForm, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `https://lms-mern-3.onrender.com/api/auth/update/${id}`,
      myForm,
      config
    );
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const contact = (userData) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_USERS_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `https://lms-mern-3.onrender.com/api/contact/new`,
      userData,
      config
    );
    console.log(data);
    dispatch({ type: CONTACT_USERS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CONTACT_USERS_FAIL,
      payload: error.response.data,
    });
  }
};