export default (categories = [], action) => {
  switch (action.type) {
    case "GET_EVENT_CATEGORIES":
      return action.payload;
    default:
      return categories;
  }
};
