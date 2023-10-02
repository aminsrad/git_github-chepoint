import { combineReducers } from "redux";
import actualiteReducer from "./actualitesreducer";
import productReducer from "./productsreducer";
import authReducer from "./authreducer";
import userReducer from "./userreducer";
import contactusReducer from "./contactusreducer";

export default combineReducers({
  actualites: actualiteReducer,
  products: productReducer,
  auth: authReducer,
  users: userReducer,
  contactus_s: contactusReducer,
});
