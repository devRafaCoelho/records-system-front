import { createContext, useState } from 'react';

type AppContextType = {
  userData: any;
  setUserData: (value: any) => void;
  clientData: any;
  setClientData: (value: any) => void;
  clientsList: any;
  setClientsList: (value: any) => void;
  valueAccountTab: any;
  setValueAccountTab: (value: any) => void;
  currentOrder: any;
  setCurrentOrder: (value: any) => void;
  open: any;
  setOpen: (value: any) => void;
  message: any;
  setMessage: (value: any) => void;
};

export const AppContext = createContext<AppContextType>({
  userData: {},
  setUserData: () => {},
  clientData: {},
  setClientData: () => {},
  clientsList: {},
  setClientsList: () => {},
  valueAccountTab: {},
  setValueAccountTab: () => {},
  currentOrder: {},
  setCurrentOrder: () => {},
  open: {},
  setOpen: () => {},
  message: {},
  setMessage: () => {}
});

export default function AppProvider({ children }: any) {
  const [userData, setUserData] = useState({});
  const [valueAccountTab, setValueAccountTab] = useState(0);
  const [currentOrder, setCurrentOrder] = useState('asc');
  const [clientsList, setClientsList] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [clientData, setClientData] = useState('');

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
        setClientsList,
        open,
        setOpen,
        message,
        setMessage,
        clientData,
        setClientData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
