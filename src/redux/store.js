import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import eventsReducer from "redux/reducer/eventsReducer";
import categoriesReducer from "redux/reducer/categoriesReducer";
import modalReducer from "redux/reducer/modalReducer";

const rootReducer = combineReducers({
  events: eventsReducer,
  categories: categoriesReducer,
  form: formReducer,
  modal: modalReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
