import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  return (
    <GlobalContext.Provider value={{ currentHash, setCurrentHash }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useHash must be used within a GlobalProvider");
  }
  return context;
};
