import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Button, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

export default function FilterMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  const options = ['up-to-date', 'defaulter'];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (params: string) => {
    if (location.search === '') {
      navigate(`/client${params}`);
    } else {
      const searchParams = new URLSearchParams(location.search);
      const newSearchParams = new URLSearchParams(params);

      for (const [key, value] of newSearchParams.entries()) {
        value !== null && value !== '' ? searchParams.set(key, value) : searchParams.delete(key);
      }

      navigate(`/client?${searchParams.toString()}`);
    }
  };

  return (
    <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1vw' }}>
      {location.search !== '' && (
        <Button variant="outlined" onClick={() => navigate('/client')}>
          Clear Filters
        </Button>
      )}

      <Tooltip title="Filter list">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FilterListIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => {
              handleClose();
              handleNavigate(`?status=${option}`);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
