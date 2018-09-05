import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ApplicationReducers from "./ApplicationReducers";

const ApplicationStore = createStore(
    ApplicationReducers,
    applyMiddleware(thunk)
);

export default ApplicationStore;
