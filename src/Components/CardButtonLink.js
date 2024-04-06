import useNavigation from "../Hooks/use-navigation";

function CardButtonLink({ to, children }) {
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
      {children}
    </div>
  );
}

export default CardButtonLink;
