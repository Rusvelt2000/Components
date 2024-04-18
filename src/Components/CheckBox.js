import { FaCheck } from "react-icons/fa6";

function CheckBox({ children }) {
  return (
    <div className="CheckBox">
      <div className="Box">{<FaCheck />}</div>
      <input type="checkbox" id="checkboxId1" value="value1" tabIndex={0} />
      <label htmlFor="checkboxId1">{children}</label>
    </div>
  );
}

export default CheckBox;
