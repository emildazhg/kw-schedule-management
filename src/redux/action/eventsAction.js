import jsonPlaceholder from "apis/jsonPlaceholder";
import history from "utils/history";

export const getEventLists = () => async dispatch => {
  const { data } = await jsonPlaceholder.get("/events");
  dispatch({ type: "FETCH_EVENTS", payload: data });
};

export const addEvents = form => async dispatch => {
  const { data } = await jsonPlaceholder.post("/events", form);
  dispatch({ type: "CREATE_EVENT", payload: data });
  history.goBack();
};

export const updateEvent = (id, values) => async dispatch => {
  await jsonPlaceholder.put(`/events/${id}`, values);
  dispatch({ type: "UPDATE_EVENT", payload: values });
  history.goBack();
};

export const deleteEvent = id => async dispatch => {
  await jsonPlaceholder.delete(`/events/${id}`);
  history.goBack();
};

export const getEventById = id => async dispatch => {
  const { data } = await jsonPlaceholder.get(`/events/${id}`);
  dispatch({ type: "FETCH_EVENT_BY_ID", payload: data });
};
