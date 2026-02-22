import { createContext, useContext, useState, ReactNode } from "react";

type PopoverContextType = {
  openPopoverId: string | null;
  setOpenPopoverId: (_id: string | null) => void;
};

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

export const PopoverProvider = ({ children }: { children: ReactNode }) => {
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

  return (
    <PopoverContext.Provider value={{ openPopoverId, setOpenPopoverId }}>
      {children}
    </PopoverContext.Provider>
  );
};

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopoverContext must be used within PopoverProvider");
  }
  return context;
};
