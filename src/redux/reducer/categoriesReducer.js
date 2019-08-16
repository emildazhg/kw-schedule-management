export default (categories = [], action) => {
  switch (action.type) {
    case "FETCH_EVENT_CATEGORIES":
      return action.payload;
    default:
      return categories;
  }
};
