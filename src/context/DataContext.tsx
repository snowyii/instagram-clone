import createDataContext from "./createContext";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { chat: action.payload };
    default:
      return state;
  }
};

const addChat = (dispatch) => {
  return (newChat) => {
    // console.log(newChat);
    // console.log("comehere");

    dispatch({
      type: "add",
      payload: newChat,
    });
  };
};

export const { Provider, Context } = createDataContext(
  dataReducer,
  { addChat },
  { chat: [] }
);
