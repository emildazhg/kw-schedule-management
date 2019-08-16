export default (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case "FETCH_EVENTS":
      return action.payload;
    case "CREATE_EVENT":
      return {
        ...state,
        payload
      };
    case "UPDATE_EVENT":
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};
