export const username = (username: any) => {
  return {
    type: "USER",
    payload: username,
  };
};

export const language = (language: any) => {
  return {
    type: "LANGUAGE",
    payload: language,
  };
};
