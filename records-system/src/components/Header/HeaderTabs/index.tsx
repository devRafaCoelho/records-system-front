import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function IconLabelTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab component={Link} to="/home" label="HOME" value="/home" icon={<HomeIcon />} />
      <Tab component={Link} to="/client" label="CLIENTS" value="/client" icon={<PeopleIcon />} />
      <Tab
        component={Link}
        to="/record"
        label="RECORDS"
        value="/record"
        icon={<RequestPageIcon />}
      />
    </Tabs>
  );
}
