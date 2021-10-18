const route = (state = {}, action: any) => {
  switch (action.type) {
    case "USER":
      return { ...state, username: action.payload };
    case "LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default route;
