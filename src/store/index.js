import { counterReducer } from "./rootReducer/rootReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore } from "redux";


const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
