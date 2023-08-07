import Modal from '@mui/material/Modal';
import { ContainerModal } from '../../styles/styles';

type ModalData = {
  open: boolean;
  setOpen: () => void;
};

export default function BasicModal({ open, setOpen }: ModalData) {
  return (
    <div>
      <Modal open={open} onClose={setOpen}>
        <ContainerModal></ContainerModal>
      </Modal>
    </div>
  );
}
