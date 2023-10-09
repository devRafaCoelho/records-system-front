import { Button, Typography, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { ContainerModal } from '../../../styles/styles';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" size="large" onClick={handleOpen}>
        + Add
      </Button>
      <Modal open={open} onClose={handleClose}>
        <ContainerModal maxWidth="xs">
          <Typography>DESEJA EXCLUIR A CONTA?</Typography>

          <Box>
            <Button
              variant="outlined"
              color="success"
              size="large"
              onClick={handleOpen}
              startIcon={<DeleteIcon />}
            >
              EXCLUIR
            </Button>
            <Button color="error" size="large" onClick={handleOpen}>
              NÃO
            </Button>
          </Box>
        </ContainerModal>
      </Modal>
    </>
  );
}
