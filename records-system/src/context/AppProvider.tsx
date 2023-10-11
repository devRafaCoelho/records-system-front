import { createContext, useState } from 'react';

type AppContextType = {
  userData: any;
  setUserData: (value: any) => void;
  clientsList: any;
  setClientsList: (value: any) => void;
  valueAccountTab: any;
  setValueAccountTab: (value: any) => void;
  currentOrder: any;
  setCurrentOrder: (value: any) => void;
};

export const AppContext = createContext<AppContextType>({
  userData: {},
  setUserData: () => {},
  clientsList: {},
  setClientsList: () => {},
  valueAccountTab: {},
  setValueAccountTab: () => {},
  currentOrder: {},
  setCurrentOrder: () => {}
});

export default function AppProvider({ children }: any) {
  const [userData, setUserData] = useState({});
  const [valueAccountTab, setValueAccountTab] = useState(0);
  const [currentOrder, setCurrentOrder] = useState('asc');
  const [clientsList, setClientsList] = useState([]);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        valueAccountTab,
        setValueAccountTab,
        currentOrder,
        setCurrentOrder,
        clientsList,
        setClientsList
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
