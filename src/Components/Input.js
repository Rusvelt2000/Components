import Label from "./Label";
import classNames from "classnames";

function Input({ label, placeholder, tooltip, size, type }) {
  const addedClasses = classNames("Input-container", size);

  return (
    <div className={addedClasses}>
      {label && <Label tooltip={tooltip}>{label}</Label>}

      <input
        className="Input"
        type={type || "text"}
        id={label}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
