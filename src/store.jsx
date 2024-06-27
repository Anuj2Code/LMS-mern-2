import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
// import { composeWithDevTools } from "redux-devtools-extension";
import {CourseReducer,courseDetailsReducer,newReviewReducer,reviewDelete,newNotesReducer,ReviewReducer} from './reducers/Course'
import {loginReducer,forgotPasswordReducer,allUsersReducer,userDetailsReducer,updateReducer,contactReducer} from  './reducers/Auth'
import {createOrder,MyOrder} from './reducers/Order'
import { NewsReducer } from "./reducers/News";
import {booksReducer,booksDetailsReducer,oldBooksReducer,bookoldDetailsReducer,similarBooksReducer,uploadAD,userBooksReducer,emailReducer,booksDelete} from './reducers/Books'

const reducer = combineReducers({
 Allcourse:CourseReducer,
 login:loginReducer,
 details:courseDetailsReducer,
 ques:newReviewReducer,
 del:reviewDelete,
 for:forgotPasswordReducer,
 newOrder:createOrder,
 myorder:MyOrder,
 all:allUsersReducer,
 news:NewsReducer,
 book:booksReducer,
 ob:oldBooksReducer,
 bok:booksDetailsReducer,
 userDet:userDetailsReducer,
 oldDet:bookoldDetailsReducer,
 sim:similarBooksReducer,
 up:uploadAD,
 apni:userBooksReducer,
 em:emailReducer,
 update:updateReducer,
 contact:contactReducer,
 bkdel:booksDelete,
 not:newNotesReducer,
 rv:ReviewReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(...middleware))
);

export default store;