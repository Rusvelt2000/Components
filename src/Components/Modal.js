import { useEffect } from "react";
import Button from "./Button";
import ReactDOM from "react-dom";

function Modal({ onClose }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="ModalBackground" onClick={onClose}></div>
      <div className="Modal md fade-in-up">
        <h3>This is a modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti officiis quia eveniet ipsa fugit beatae, aliquid, nesciunt
          error consectetur sed nisi ratione. Laboriosam rem laborum quos
          repellat, consequatur quisquam.
        </p>
        <Button primary outline onClick={onClose}>
          Close modal
        </Button>
      </div>
    </div>,

    document.querySelector("#modal-root")
  );
}

export default Modal;
