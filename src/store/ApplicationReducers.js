/**
 * Root Reducero.
 */
import { combineReducers } from "redux";

// Import Reducers
import baseStore from "modules/Base/BaseReducer";
import authStore from "modules/Auth/AuthReducer";

// Combine all reducers into one root reducer
const ApplicationReducers = combineReducers({
    baseStore,
    authStore
});

export default ApplicationReducers;
