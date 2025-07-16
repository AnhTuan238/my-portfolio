"use client";

import { createContext, useContext, useState } from "react";

const ScrollContext = createContext<{
  shrink: boolean;
  setShrink: (value: boolean) => void;
}>({
  shrink: false,
  setShrink: () => {},
});

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [shrink, setShrink] = useState(false);
  return (
    <ScrollContext.Provider value={{ shrink, setShrink }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
