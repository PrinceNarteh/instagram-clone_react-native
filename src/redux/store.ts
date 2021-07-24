import { createStore, applyMiddleware } from "redux";
import rootReduder from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(rootReduder, applyMiddleware(thunk));