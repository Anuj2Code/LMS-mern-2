import {
ALL_COURSE_REQUEST,
ALL_COURSE_SUCCESS,
ALL_COURSE_FAIL,
COURSE_DETAILS_FAIL,
COURSE_DETAILS_REQUEST,
COURSE_DETAILS_SUCCESS,
NEW_REVIEW_FAIL,
NEW_REVIEW_REQUEST,
NEW_REVIEW_SUCCESS,
NEW_REVIEW_RESET,
DELETE_REVIEW_FAIL,
DELETE_REVIEW_REQUEST,
DELETE_REVIEW_SUCCESS,
DELETE_REVIEW_RESET,
NEW_NOTES_FAIL,
NEW_NOTES_REQUEST,
NEW_NOTES_SUCCESS,
NEW_NOTES_RESET,
REVIEW_FAIL,
REVIEW_REQUEST,
REVIEW_SUCCESS,
REVIEW_RESET
} from  '../constants/Cour'

export const CourseReducer = (state = { course: [] }, action) => {
    switch (action.type) {
      case ALL_COURSE_REQUEST:
        return {
          loading: true,
          course: [],
        };
      case ALL_COURSE_SUCCESS:
        return {
          loading: false,
          course: action.payload.prod,
          courseCount: action.payload.productsCount,
          perPage:action.payload.perPage,
        };
      case ALL_COURSE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const courseDetailsReducer = (state = { courses : {}}, action) => {
    switch (action.type) {
      case COURSE_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
        case COURSE_DETAILS_SUCCESS:
          return {
            loading: false,
            courses: action.payload
          };
      case COURSE_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_REVIEW_SUCCESS:
        return {
          loading: false,
          success: action.payload.data.lectures,
          ok:true
        };
      case NEW_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
          ok:false,
        };
      case NEW_REVIEW_RESET:
        return {
          ...state,
          success: false,
          ok:false
        };
      default:
        return state;
    }
  };

  export const ReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case REVIEW_SUCCESS:
        return {
          loading: false,
          success: action.payload,
          ok:true
        };
      case REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
          ok:false,
        };
      case REVIEW_RESET:
        return {
          ...state,
          success: false,
          ok:false
        };
      default:
        return state;
    }
  };

  export const reviewDelete = (state = {}, action) => {
    switch (action.type) {
      case DELETE_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
          ok1:true
        };
      case DELETE_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
          ok1:false
        };
        case DELETE_REVIEW_RESET:
          return {
            ...state,
            success: false,
            ok1:false
          }
      default:
        return state;
    }
  };

  export const newNotesReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_NOTES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_NOTES_SUCCESS:
        return {
          loading: false,
          data: action.payload.courseLec.lectures,
        };
      case NEW_NOTES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case NEW_NOTES_RESET:
          return {
            ...state,
            success: false,
            ok1:false
          }
      default:
        return state;
    }
  };