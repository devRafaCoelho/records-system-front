import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { getTheme } from '../../../theme/theme';
import ClientUpdateForm from '../../Forms/ClientUpdateForm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

export default function UpdateClientModal() {
  const [open, setOpen] = React.useState(false);
  const theme = getTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        <EditIcon fontSize="small" style={{ marginRight: '0.5vw' }} />
        Edit Client
      </Button>

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          sx={{ m: 0, p: 2, backgroundColor: theme.palette.grey[900] }}
          id="customized-dialog-title"
        >
          Edit Client
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ backgroundColor: theme.palette.grey[900] }}>
          <ClientUpdateForm onClose={handleClose} />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
