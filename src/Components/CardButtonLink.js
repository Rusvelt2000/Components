import useNavigation from "../Hooks/use-navigation";

function CardButtonLink({ to, title, caption, image }) {
  const { navigate } = useNavigation();

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <div className="cardBtnLink" onClick={handleClick}>
      {image}
      <div className="caption">
        <h4>{title}</h4>
        <small>{caption}</small>
      </div>
    </div>
  );
}

export default CardButtonLink;
