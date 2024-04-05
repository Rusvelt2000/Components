import Tooltip from "./Tooltip";

function Label({ children, tooltip }) {
  return (
    <div className="label-container">
      <label htmlFor={children}>{children}</label>
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </div>
  );
}

export default Label;
