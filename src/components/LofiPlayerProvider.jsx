import React, { createContext, useState, useEffect } from "react";

export const LofiPlayerContext = createContext();

export const LofiPlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Handle playing the lofi song when the component mounts
    setIsPlaying(true);

    // Clean up function to pause the lofi song when the component unmounts
    return () => setIsPlaying(false);
  }, []);

  return (
    <LofiPlayerContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </LofiPlayerContext.Provider>
  );
};
