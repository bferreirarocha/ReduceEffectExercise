import { createContext, useContext, useReducer } from "react";
import { ModalReducer, ModalInitialState } from "./reducer/modal";
import { MenuReducer, MenuInitialState } from "./reducer/menu";

export const StateContext = createContext({});

export const GobalProvider = ({ children }) => {
  const [ModalState, ModalDispatch] = useReducer(
    ModalReducer,
    ModalInitialState
  );
  const [MenuState, MenuDispatch] = useReducer(MenuReducer, MenuInitialState);
  return (
    <StateContext.Provider
      value={{ ModalState, ModalDispatch, MenuState, MenuDispatch }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const StateValue = () => useContext(StateContext);
