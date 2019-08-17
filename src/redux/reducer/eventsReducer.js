export default (
  state = {
    eventList: [],
    event: {}
  },
  action
) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return { ...state, eventList: [...action.payload] };
    case "CREATE_EVENT":
      return {
        ...state,
        eventList: [...state.eventList, action.payload]
      };
    case "UPDATE_EVENT":
      return state;
    case "FETCH_EVENT_BY_ID":
      return { ...state, event: { ...action.payload } };
    default:
      return state;
  }
};
