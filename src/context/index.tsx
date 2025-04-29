"use client";

import { createContext, useContext, useEffect, useState } from "react";

type StoreContextType = {
  isFilterOpen: boolean;
  isLoggedIn: boolean;
  handleFilterToggle: () => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterOpen((prev) => !prev);
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <StoreContext.Provider
      value={{ isFilterOpen, handleFilterToggle, isLoggedIn }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
