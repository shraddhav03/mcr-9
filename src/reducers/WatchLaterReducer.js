// const [state, dispatch] = useReducer(reducer, initialArg, in)
import { useReducer } from "react";

export const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === "ADD") {
    const newState = { watchLater: [...state.watchLater, action.payload] };
    window.localStorage.setItem("appState", JSON.stringify(newState));
    return newState;
  }
  if (action.type === "REMOVE") {
    const newState = {
      watchLater: state.watchLater.filter((a) => a !== action.payload),
    };
    window.localStorage.setItem("appState", JSON.stringify(newState));
    return newState;
  }

  throw Error("Unknown action.");
};
