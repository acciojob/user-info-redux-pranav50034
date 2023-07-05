import userReducer from "./reducers/userReducers";
import { createStore } from "redux";

const store = createStore(userReducer)

export default store