import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import { Tab, Tabs } from '@mui/material';
import * as React from 'react';
import useAppContext from '../../hooks/useAppContext';

export default function IconTabs() {
  const { valueTab, setValueTab } = useAppContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  return (
    <Tabs value={valueTab} onChange={handleChange}>
      <Tab icon={<HomeIcon />} label="HOME" />
      <Tab icon={<PeopleIcon />} label="CLIENTES" />
      <Tab icon={<RequestPageIcon />} label="COBRANÇAS" />
    </Tabs>
  );
}
