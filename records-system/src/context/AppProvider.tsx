import { createContext, useState } from 'react';

type AppContextType = {
  userData: any;
  setUserData: (value: any) => void;
  token: any;
  setToken: (value: any) => void;
  valueTab: any;
  setValueTab: (value: any) => void;
};

export const AppContext = createContext<AppContextType>({
  userData: {},
  setUserData: () => {},
  token: {},
  setToken: () => {},
  valueTab: {},
  setValueTab: () => {}
});

export default function AppProvider({ children }: any) {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState({});
  const [valueTab, setValueTab] = useState(0);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        token,
        setToken,
        valueTab,
        setValueTab
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
