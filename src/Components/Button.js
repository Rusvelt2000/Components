import "./components.scss";
import className from "classnames";

function Button({ children, primary, secondary }) {
  const classes = className("button", {
    primary: primary,
    secondary: secondary,
  });
  return <button className={classes}>{children}</button>;
}

export default Button;
