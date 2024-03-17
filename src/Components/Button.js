import "./components.scss";
import className from "classnames";

function Button({ children, primary, secondary, rounded, outline }) {
  const classes = className("button", {
    primary,
    secondary,
    rounded,
    outline,
  });

  if (primary && secondary) {
    throw new Error("Buttons can't be both primary and secondary");
  }

  return <button className={classes}>{children}</button>;
}

export default Button;
