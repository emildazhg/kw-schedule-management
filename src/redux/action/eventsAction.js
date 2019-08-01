import jsonPlaceholder from "apis/jsonPlaceholder";

export const getEventLists = () => async dispatch => {
  const { data } = await jsonPlaceholder.get("/events");
  dispatch({ type: "GET_EVENT_LIST", payload: data });
};

export const addEvents = (form, value, date) => async dispatch => {
  const { category, title, start } = form;
  const { classNames } = value;
  const { startDate } = date;

  const { data } = await jsonPlaceholder.post("/events", {
    title,
    category,
    classNames,
    start: startDate || start
  });
  dispatch({ type: "ADD_EVENT", payload: data });
};
