import Label from "./Label";
import classNames from "classnames";

function Input({
  label,
  placeholder,
  tooltip,
  size,
  type,
  helperText,
  errorText,
  className,
  ...rest
}) {
  const addedClasses = classNames("Input-container", className, size);

  return (
    <div className={addedClasses}>
      {label && <Label tooltip={tooltip}>{label}</Label>}

      <div className="Input-wrapper">
        <input
          {...rest}
          className="Input"
          type={type || "text"}
          id={label}
          placeholder={placeholder}
        />
        {errorText ? (
          <small className="Input-error error-shake">{errorText}</small>
        ) : helperText ? (
          <small className="Input-helper">{helperText}</small>
        ) : null}
      </div>
    </div>
  );
}

export default Input;
