import * as React from "react";

const BaseProviderContext = React.createContext(null);

export const BaseProvider = ({ children }) => {
  return (
    <BaseProviderContext.Provider value={null}>
      {children}
    </BaseProviderContext.Provider>
  );
};
