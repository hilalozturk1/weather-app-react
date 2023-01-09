import { createContext, useContext, useState } from "react";

const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [name, setName] = useState("Adana");
  const values = { name, setName };

  return <NameContext.Provider value={values}>{children}</NameContext.Provider>;
};

export const useName = () => useContext(NameContext);
