import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import useAppContext from '../../hooks/useAppContext';

export default function CenteredTabs() {
  const { valueAccountTab, setValueAccountTab } = useAppContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueAccountTab(newValue);
  };

  return (
    <Tabs value={valueAccountTab} onChange={handleChange} centered>
      <Tab label="Personal Data" />
      <Tab label="Security" />
    </Tabs>
  );
}
