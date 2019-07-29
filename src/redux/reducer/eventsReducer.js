export default (eventLists = [], action) => {
  switch (action.type) {
    case "GET_EVENT_LIST":
      return action.payload;
    case "ADD_EVENT":
      return [...eventLists, action.payload];
    default:
      return eventLists;
  }
};
