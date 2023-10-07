import { createContext, useState } from 'react';

type AppContextType = {
  userData: any;
  setUserData: (value: any) => void;
  valueAccountTab: any;
  setValueAccountTab: (value: any) => void;
};

export const AppContext = createContext<AppContextType>({
  userData: {},
  setUserData: () => {},
  valueAccountTab: {},
  setValueAccountTab: () => {}
});

export default function AppProvider({ children }: any) {
  const [userData, setUserData] = useState({});
  const [valueAccountTab, setValueAccountTab] = useState(0);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        valueAccountTab,
        setValueAccountTab
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
