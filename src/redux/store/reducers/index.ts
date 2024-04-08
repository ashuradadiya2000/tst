import { combineReducers } from "redux";
import auth from "./auth";
import SelectSeats from "./ticketsReducers";

const reducers = combineReducers({ auth, SelectSeats });

export default reducers;
