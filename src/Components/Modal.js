import { useEffect } from "react";
import classNames from "classnames";
import Button from "./Button";
import ReactDOM from "react-dom";
import { GoXCircle } from "react-icons/go";

function Modal({ onClose, modalSize }) {
  const addedClasses = classNames("Modal fade-in-up", modalSize);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div className="ModalBackground" onClick={onClose}></div>
      <div className={addedClasses}>
        <h3>This is a modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti officiis quia eveniet ipsa fugit beatae, aliquid, nesciunt
          error consectetur sed nisi ratione. Laboriosam rem laborum quos
          repellat, consequatur quisquam.
        </p>
        <Button secondary outline onClick={onClose}>
          <GoXCircle className="icon" />
          Close modal
        </Button>
      </div>
    </div>,

    document.querySelector("#modal-root")
  );
}

export default Modal;
