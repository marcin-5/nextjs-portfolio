import { createContext, useContext } from "react";

interface MenuContextType {
  onClose: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
  <MenuContext.Provider value={{ onClose }}>{children}</MenuContext.Provider>
);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
