import Label from "./Label";
import classNames from "classnames";
import Tooltip from "./Tooltip";

function Input({
  label,
  placeholder,
  tooltip,
  size,
  type,
  helperText,
  errorText,
  ...rest
}) {
  const addedClasses = classNames("Input-container", size);

  return (
    <div className={addedClasses}>
      {label && <Label tooltip={tooltip}>{label}</Label>}
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
      <div className="Input-wrapper">
        <input
          {...rest}
          className="Input"
          type={type || "text"}
          id={label}
          placeholder={placeholder}
        />
        {errorText ? (
          <small className="Input-error">{errorText}</small>
        ) : helperText ? (
          <small className="Input-helper">{helperText}</small>
        ) : null}
      </div>
    </div>
  );
}

export default Input;
