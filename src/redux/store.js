import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import  getGamesResult  from "./reducers/setGames";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./reducers/index";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
