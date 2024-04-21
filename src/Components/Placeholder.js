import classNames from "classnames";

function Placeholder({
  xs,
  sm,
  md,
  lg,
  xl,
  emptyLine,
  image,
  avatar,
  chat,
  left,
  right,
  button,
  fix,
}) {
  const classes = classNames("Placeholder", "glow", {
    xs,
    sm,
    md,
    lg,
    xl,
    emptyLine,
    image,
    avatar,
    chat,
    left,
    right,
    button,
    fix,
  });
  const chatWidth = Math.floor(Math.random() * (280 - 80) + 60);
  return (
    <div className="PlaceholderContainer">
      {chat ? (
        <div style={{ width: chatWidth }} className={classes}></div>
      ) : (
        <div className={classes}></div>
      )}
    </div>
  );
}

export default Placeholder;
