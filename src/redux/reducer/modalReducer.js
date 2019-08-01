export default (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return (state = !state);
    case "TOGGLE_MODAL_DATE":
      console.log(action.arg);
      return action.arg;
    default:
      return state;
  }
};
