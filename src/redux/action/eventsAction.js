import jsonPlaceholder from "apis/jsonPlaceholder";

export const getEventLists = () => async dispatch => {
  const { data } = await jsonPlaceholder.get("/events");
  dispatch({ type: "GET_EVENT_LIST", payload: data });
};

export const addEvents = (form, value) => async dispatch => {
  const { category, title } = form;
  const { classNames } = value;
  const { data } = await jsonPlaceholder.post("/events", {
    title,
    category,
    classNames
  });
  dispatch({ type: "ADD_EVENT", payload: data });
};
