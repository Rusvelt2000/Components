import classNames from "classnames";

function Switch({ image, className, ...rest }) {
  const addedClasses = classNames("Switch-handle", className);
  return (
    <div {...rest} className="Switch">
      <div className={addedClasses}>{image}</div>
    </div>
  );
}

export default Switch;
