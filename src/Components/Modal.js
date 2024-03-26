import Button from "./Button";

function Modal({ onClose }) {
  const handleClick = () => {
    onClose();
  };

  return (
    <div className="ModalBackground">
      <div className="Modal md">
        <h3>This is a modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti officiis quia eveniet ipsa fugit beatae, aliquid, nesciunt
          error consectetur sed nisi ratione. Laboriosam rem laborum quos
          repellat, consequatur quisquam.
        </p>
        <Button primary outline onClick={() => handleClick()}>
          Close modal
        </Button>
      </div>
    </div>
  );
}

export default Modal;
