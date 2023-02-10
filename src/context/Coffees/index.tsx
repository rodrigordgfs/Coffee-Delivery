import { ReactNode, createContext } from "react";
import { COFFEES } from "../../utils/coffees";
import { ICoffee } from "../../interfaces/ICoffee";

interface ICoffeesContext {
  coffees: ICoffee[];
}

interface IChatsContextProps {
  children: ReactNode;
}

export const CoffeesContext = createContext({} as ICoffeesContext);

export function CoffeesContextProvider({ children }: IChatsContextProps) {
  const coffees = COFFEES;

  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  );
}
