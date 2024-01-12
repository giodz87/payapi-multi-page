import { createContext, useContext } from "react";
export const MyContext = createContext<MyContextProps | undefined>(undefined);
import { MyContextProps } from "./App";
export default function useUserContext() {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error("useUserContext must be used with a MyContext");
  }

  return context;
}
