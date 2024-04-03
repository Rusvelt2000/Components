function Container({ children, title }) {
  return (
    <div className="Container">
      <h4>{title}</h4>
      <div className="flex">{children}</div>
    </div>
  );
}

export default Container;
