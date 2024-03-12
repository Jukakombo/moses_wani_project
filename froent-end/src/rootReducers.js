import { combineReducers } from "redux";
import news from "./reducers/news";
import authReducer from "./reducers/auth";
import contacts from "./reducers/contacts";
const rootReducer = combineReducers({
  news,
  authReducer,
  contacts,
});

export default rootReducer;
