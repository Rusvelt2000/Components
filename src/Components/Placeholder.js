import classNames from "classnames";

function Placeholder({ xs, sm, md, lg, xl, image, button, fix }) {
  const classes = classNames("Placeholder", "glow", {
    xs,
    sm,
    md,
    lg,
    xl,
    image,
    button,
    fix,
  });
  return (
    <div className="PlaceholderContainer">
      <div className={classes}></div>
    </div>
  );
}

export default Placeholder;
