import jsonPlaceholder from "apis/jsonPlaceholder";

export const getEventLists = () => async dispatch => {
  const { data } = await jsonPlaceholder.get("/events");
  dispatch({ type: "FETCH_EVENTS", payload: data });
};

export const addEvents = form => async dispatch => {
  const { data } = await jsonPlaceholder.post("/events", form);
  dispatch({ type: "CREATE_EVENT", payload: data });
};

export const updateEvent = (id, values) => async dispatch => {
  const { data } = await jsonPlaceholder.put(`/events/${id}`, values);
  dispatch({ type: "UPDATE_EVENT", payload: data });
};

export const deleteEvent = id => async dispatch => {
  await jsonPlaceholder.delete(`/events/${id}`);
  dispatch({ type: "DELETE_EVENT", payload: id });
};
