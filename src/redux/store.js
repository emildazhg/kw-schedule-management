import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import eventsReducer from "redux/reducer/eventsReducer";
import categoriesReducer from "redux/reducer/categoriesReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  events: eventsReducer,
  categories: categoriesReducer,
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
