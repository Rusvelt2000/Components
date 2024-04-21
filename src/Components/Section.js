import classNames from "classnames";

function Section({ col2, col3, col4, children }) {
  const classes = classNames({
    "col-2": col2,
    "col-3": col3,
    "col-4": col4,
  });
  return <section className={classes}>{children}</section>;
}

export default Section;
