import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import { Tab } from '@mui/material';
import * as React from 'react';
import useAppContext from '../../hooks/useAppContext';
import { CustomTabs } from './styles';

export default function IconLabelTabs() {
  const { valueTab, setValueTab } = useAppContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  return (
    <CustomTabs value={valueTab} onChange={handleChange} textColor="inherit">
      <Tab icon={<RequestPageIcon />} label="COBRANÇAS" />
      <Tab icon={<PeopleIcon />} label="CLIENTES" />
      <Tab icon={<HomeIcon />} label="HOME" />
    </CustomTabs>
  );
}
