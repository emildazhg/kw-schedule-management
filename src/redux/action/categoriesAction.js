import jsonPlaceholder from "apis/jsonPlaceholder";

export const getEventCategories = () => async dispatch => {
  const { data } = await jsonPlaceholder.get("/categories");
  dispatch({ type: "GET_EVENT_CATEGORIES", payload: data });
};
