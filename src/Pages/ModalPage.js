import { useState } from "react";

import Modal from "../Components/Modal";
import Button from "../Components/Button";

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button secondary outline onClick={handleOpenModal}>
        Open Modal
      </Button>
      {isOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default ModalPage;
