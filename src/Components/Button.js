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
  span,
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
    span,
  });

  if (primary && secondary && warning && alert) {
    throw new Error(
      "Buttons can't be both primary, secondary, alert or warning"
    );
  }

  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
