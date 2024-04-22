import classNames from "classnames";
import { useState, useEffect } from "react";

function Placeholder({
  text,
  emptyLine,
  header,
  avatar,
  chat,
  left,
  right,
  button,
  gallery,
}) {
  const [width, setWidth] = useState(
    Math.floor(Math.random() * (90 - 20) + 20)
  );
  const classes = classNames("Placeholder glow", {
    text,
    emptyLine,
    header,
    avatar,
    chat,
    left,
    right,
    button,
    gallery,
  });
  function timeout() {
    setWidth(Math.floor(Math.random() * (90 - 20) + 20));
  }
  useEffect(() => {
    const interval = setInterval(timeout, 2400);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="PlaceholderContainer">
      {chat || text || button ? (
        <div style={{ width: width + "%" }} className={classes}></div>
      ) : gallery ? (
        <div className="PlaceholderGallery">
          <div style={{ width: width / 1.5 + "%" }} className={classes}></div>
          <div style={{ width: width / 2 + "%" }} className={classes}></div>
          <div style={{ width: width / 1.3 + "%" }} className={classes}></div>
        </div>
      ) : (
        <div className={classes}></div>
      )}
    </div>
  );
}

export default Placeholder;
