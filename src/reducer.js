function reducer(state, action) {
  switch (action.type) {
    case "set-title":
      return {
        title: action.payload.data,
        date: state.date,
        body: state.body
      };
    case "set-date":
      return {
        title: state.title,
        date: action.payload.data,
        body: state.body
      };
    case "set-body":
      return {
        title: state.title,
        date: state.date,
        body: action.payload.data
      };
    default:
      return state;
  }
}

export default reducer;
