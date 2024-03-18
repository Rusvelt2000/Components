import "./components.scss";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  rounded,
  outline,
  warning,
  ...rest
}) {
  const classes = className("button", {
    primary,
    secondary,
    rounded,
    outline,
    warning,
  });

  if (primary && secondary && warning) {
    throw new Error("Buttons can't be both primary and secondary");
  }

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
