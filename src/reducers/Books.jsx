import {
BOOKS_REQUEST,
BOOKS_REQUEST_FAIL,
BOOKS_REQUEST_SUCCESS,
BOOKS_DETAILS_FAIL,
BOOKS_DETAILS_REQUEST,
BOOKS_DETAILS_SUCCESS,
OLD_BOOKS_REQUEST,
OLD_BOOKS_REQUEST_FAIL,
OLD_BOOKS_REQUEST_SUCCESS,
OLD_BOOKS_DEATILS,
OLD_BOOKS_DEATILS_SUCCESS,
OLD_BOOKS_DEATILS_FAIL,
SIMILAR_BOOKS_DEATILS,
SIMILAR_BOOKS_DEATILS_SUCCESS,
SIMILAR_BOOKS_DEATILS_FAIL,
UPLOAD_BOOKS_DEATILS,
UPLOAD_BOOKS_DEATILS_SUCCESS,
UPLOAD_BOOKS_DEATILS_FAIL,
UPLOAD_BOOKS_DEATILS_REST,
USER_BOOKS_DEATILS,
USER_BOOKS_DEATILS_FAIL,
USER_BOOKS_DEATILS_SUCCESS,
BOOKS_EMAIL_FAIL,
BOOKS_EMAIL_REQUEST,
BOOKS_EMAIL_SUCCESS,
BOOKS_EMAIL_REST,
DELETE_BOOKS_DEATILS,
DELETE_BOOKS_DEATILS_FAIL,
DELETE_BOOKS_DEATILS_SUCCESS,
DELETE_BOOKS_DEATILS_REST
}
from '../constants/Books'

export const booksReducer = (state = { books: [] }, action) => {
    switch (action.type) {
      case BOOKS_REQUEST:
        return {
          loading: true,
          books: [],
        };
      case BOOKS_REQUEST_SUCCESS:
        return {
          loading: false,
          books: action.payload,
        };
      case BOOKS_REQUEST_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const booksDetailsReducer = (state = { books : {}}, action) => {
    switch (action.type) {
      case BOOKS_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
        case BOOKS_DETAILS_SUCCESS:
          return {
            loading: false,
            books: action.payload
          };
      case BOOKS_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const oldBooksReducer = (state = { Oldbooks: [] }, action) => {
    switch (action.type) {
      case OLD_BOOKS_REQUEST:
        return {
          loading: true,
          Oldbooks: [],
        };
      case OLD_BOOKS_REQUEST_SUCCESS:
        return {
          loading: false,
          oldbooks: action.payload.old,
        };
      case OLD_BOOKS_REQUEST_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const bookoldDetailsReducer = (state = { books : {}}, action) => {
    switch (action.type) {
      case OLD_BOOKS_DEATILS:
        return {
          loading: true,
          ...state,
        };
        case OLD_BOOKS_DEATILS_SUCCESS:
          return {
            loading: false,
            books: action.payload
          };
      case OLD_BOOKS_DEATILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const similarBooksReducer = (state = { book: [] }, action) => {
    switch (action.type) {
      case SIMILAR_BOOKS_DEATILS:
        return {
          loading: true,
          book: [],
        };
      case SIMILAR_BOOKS_DEATILS_SUCCESS:
        return {
          loading: false,
          book: action.payload,
        };
      case SIMILAR_BOOKS_DEATILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const userBooksReducer = (state = { usebook: [] }, action) => {
    switch (action.type) {
      case USER_BOOKS_DEATILS:
        return {
          loading: true,
          usebook: [],
        };
      case USER_BOOKS_DEATILS_SUCCESS:
        return {
          loading: false,
          usebook: action.payload,
        };
      case USER_BOOKS_DEATILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const uploadAD = (state = { ad: {} }, action) => {
    switch (action.type) {
      case UPLOAD_BOOKS_DEATILS:
        return {
          loading: true,
        };
      case UPLOAD_BOOKS_DEATILS_SUCCESS:
        return {
          ...state,
          loading: false,
          ad: action.payload,
          sub:true,
        };
      case UPLOAD_BOOKS_DEATILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
          sub:false
        };
        case UPLOAD_BOOKS_DEATILS_REST:
          return {
            ...state,
            sub: false,
          }
      default:
        return state;
    }
  };

  export const emailReducer = (state = {}, action) => {
    switch (action.type) {
      case BOOKS_EMAIL_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case BOOKS_EMAIL_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload,
          ok:true
        };
  
      case BOOKS_EMAIL_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case BOOKS_EMAIL_REST:
        return {
          ...state,
          ok:false
        }
      default:
        return state;
  
    }
  };

  export const booksDelete = (state = {}, action) => {
    switch (action.type) {
      case DELETE_BOOKS_DEATILS:
        return {
          ...state,
          loading: true,
        };
      case DELETE_BOOKS_DEATILS_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
          ok1:true
        };
      case DELETE_BOOKS_DEATILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
          ok1:false
        };
        case DELETE_BOOKS_DEATILS_REST:
          return {
            ...state,
            success: false,
            ok1:false
          }
      default:
        return state;
    }
  };