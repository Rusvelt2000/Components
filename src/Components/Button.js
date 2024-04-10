import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  rounded,
  favicon,
  outline,
  warning,
  alert,
  className,
  ...rest
}) {
  const classes = classNames("button", className, {
    primary,
    secondary,
    rounded,
    outline,
    warning,
    alert,
    favicon,
  });

  if (primary && secondary && warning && alert) {
    throw new Error(
      "Buttons can't be both primary, secondary, alert or warning"
    );
  }

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
