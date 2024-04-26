import {
REGISTER_USER_FAIL,
REGISTER_USER_REQUEST,
REGISTER_USER_SUCCESS,
LOGIN_FAIL,
LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_RESET,
FORGOT_PASSWORD_FAIL,
FORGOT_PASSWORD_REQUEST,
FORGOT_PASSWORD_SUCCESS,
REGISTER_RESET,
RESET_PASSWORD_FAIL,
RESET_PASSWORD_RESET ,
RESET_PASSWORD_SUCCESS,
RESET_PASSWORD_REQUEST,
ALL_USERS_FAIL,
ALL_USERS_REQUEST,
ALL_USERS_SUCCESS,
USER_DETAILS_REQUEST,
USER_DETAILS_SUCCESS,
USER_DETAILS_FAIL,
UPDATE_PROFILE_REQUEST,
UPDATE_PROFILE_SUCCESS,
UPDATE_PROFILE_FAIL,
UPDATE_PROFILE_RESET,
UPDATE_PASSWORD_FAIL,
UPDATE_PASSWORD_REQUEST,
UPDATE_PASSWORD_SUCCESS,
UPDATE_PASSWORD_RESET,
CONTACT_USERS_FAIL,
CONTACT_USERS_REQUEST,
CONTACT_USERS_SUCCESS,
CONTACT_USERS_REST
}
from '../constants/Auth'

export const loginReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        case LOGIN_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
        case LOGIN_SUCCESS:
          return{
            ...state,
            loading: false,
            isAuthenticate: true,
            user: action.payload,
          }
      case REGISTER_USER_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };

        case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticate: false,
          user: null,
          error: action.payload,
        };

        case REGISTER_RESET:
          return{
            ...state,
            isAuthenticated: false,
          }

        case LOGIN_RESET:
          return{
            ...state,
            isAuthenticate: false,
          }
      default:
        return state;
    }
  };
  
  export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case USER_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
  
      case USER_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case RESET_PASSWORD_REQUEST:
      case FORGOT_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
   
        case RESET_PASSWORD_SUCCESS:
          return {
            ...state,
            loading: false,
            message: action.payload,
            ok:true
          };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };
  
      case FORGOT_PASSWORD_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        case RESET_PASSWORD_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          }
          case RESET_PASSWORD_RESET :
            return {
              ...state,
              ok: false,
            }
      default:
        return state;
    }
  };

  export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case ALL_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload.data,
        };
  
      case ALL_USERS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const updateReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_PASSWORD_REQUEST:
      case UPDATE_PROFILE_REQUEST:
        return {
          ...state,
          loading: true,
        };
        case UPDATE_PASSWORD_SUCCESS:
      case UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
        case UPDATE_PASSWORD_FAIL:
      case UPDATE_PROFILE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case UPDATE_PASSWORD_RESET:
      case UPDATE_PROFILE_RESET:
        return {
          ...state,
          isUpdated: false,
        };
        default:
        return state;
    }
  };

  export const contactReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case CONTACT_USERS_REQUEST:
        return {
          loading: true,
        };
      case CONTACT_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          ok:true,
          user: action.payload,
        };
      case CONTACT_USERS_FAIL:
        return {
          ...state,
          loading: false,
          ok: false,
          user: null,
          error: action.payload,
        };

        case CONTACT_USERS_REST:
          return{
            ...state,
            ok: false,
          }
      default:
        return state;
    }
  };