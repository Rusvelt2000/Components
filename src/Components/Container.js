import classNames from "classnames";

function Container({ children, title, className, icon }) {
  const addedClasses = classNames("flex", className);
  return (
    <div className="Container">
      <div className="title-container">
        {icon && <div className="icon">{icon}</div>}
        <h3>{title}</h3>
      </div>
      <div className={addedClasses}>{children}</div>
    </div>
  );
}

export default Container;
