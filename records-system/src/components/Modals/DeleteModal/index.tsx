import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../hooks/useToast';
import { api } from '../../../services/api';

export default function DeleteModal() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { toastfy } = useToast();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate } = useMutation(api.deleteUser, {
    onSuccess: () => {
      navigate('/userRegister');
      toastfy({
        type: 'success',
        message: 'Sua conta foi encerada.'
      });
    }
  });

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        ENCERRAR CONTA
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'ENCERRAR CONTA?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja realmente encerrar sua conta?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={() => {
              mutate();
              handleClose();
            }}
            autoFocus
            startIcon={<DeleteIcon />}
          >
            Encerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
