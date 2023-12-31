import { combineReducers } from "@reduxjs/toolkit"
import homeSlice from "./homeSlice";

const rootReducer = combineReducers({
    home: homeSlice
});

export default rootReducer;
