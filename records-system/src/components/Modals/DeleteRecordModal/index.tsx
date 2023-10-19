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
import CustomizedDialogs from '../AddRecordModal';

export default function DeleteRecordModal() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { toastfy } = useToast();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const { mutate } = useMutation(api.deleteUser, {
  //   onSuccess: () => {
  //     navigate('/userRegister');
  //     toastfy({
  //       type: 'success',
  //       message: 'Sua conta foi encerada.'
  //     });
  //   }
  // });

  return (
    <div>
      <DeleteIcon onClick={handleClickOpen} cursor="pointer" />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete Record?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this record?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              // mutate();
              handleClose();
            }}
            autoFocus
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
