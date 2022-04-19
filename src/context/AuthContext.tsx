import createDataContext from "./createContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { token: action.payload };
    default:
      return state;
  }
};

const login = (dispatch) => {
  return async (username) => {
    dispatch({
      type: "login",
      payload: username,
    });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { login },
  { token: null }
);
