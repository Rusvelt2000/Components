function Radio({ children, value, name }) {
  return (
    <div className="RadioButton">
      <div className="Circle"></div>
      <input type="radio" name={name} value={value} id={value} />
      <label htmlFor={value}>{children}</label>
    </div>
  );
}

export default Radio;
