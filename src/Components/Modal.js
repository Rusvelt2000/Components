import { useEffect } from "react";
import classNames from "classnames";
import Button from "./Button";
import ReactDOM from "react-dom";
import { GoXCircle } from "react-icons/go";

function Modal({ onClose, modalSize, image, title, children }) {
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
        {image && (
          <div className="ModalImageContainer">
            <img src={image} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{children}</p>
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
