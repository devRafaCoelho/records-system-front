import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { ContainerModal } from '../../styles/styles';

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography onClick={handleOpen}>MINHA CONTA</Typography>
      <Modal open={open} onClose={handleClose}>
        <ContainerModal maxWidth="sm" disableGutters></ContainerModal>
      </Modal>
    </>
  );
}
