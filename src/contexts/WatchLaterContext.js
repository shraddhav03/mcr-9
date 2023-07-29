import { createContext, useReducer } from "react";
import { reducer } from "../reducers/WatchLaterReducer";

const initValue = { watchLater: [] };
export const WatchLaterContext = createContext(initValue);

export const WatchLaterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initValue);

  return (
    <>
      <WatchLaterContext.Provider value={{ state, dispatch }}>
        {children}
      </WatchLaterContext.Provider>
    </>
  );
};
