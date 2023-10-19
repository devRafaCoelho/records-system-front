import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import ClientRegisterForm from '../../Forms/ClientRegisterForm';
import { getTheme } from '../../../theme/theme';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

export default function AddClientModal() {
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
        Add Client
      </Button>

      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          sx={{ m: 0, p: 2, backgroundColor: theme.palette.grey[900] }}
          id="customized-dialog-title"
        >
          Add Client
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
          <ClientRegisterForm onClose={handleClose} />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
