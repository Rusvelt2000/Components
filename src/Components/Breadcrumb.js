import useNavigation from "../Hooks/use-navigation";
import BreadcrumbLink from "./BreadcrumbLink";

function Breadcrumb() {
  const { currentPath } = useNavigation();
  const segments = currentPath.split("/").filter((segment) => segment);
  const breadcrumbs = [];

  let pathSoFar = "";
  for (let segment of segments) {
    pathSoFar += `/${segment}`;
    breadcrumbs.push({ name: segment, path: pathSoFar });
  }

  const renderedBreadcrumbs = breadcrumbs.map((segment, index) => {
    if (breadcrumbs.length - 1 !== index) {
      return (
        <BreadcrumbLink key={index} to={segment.path}>
          {segment.name}
        </BreadcrumbLink>
      );
    } else {
      return <p key={index}>{segment.name}</p>;
    }
  });

  return <div className="BreadcrumbContainer">{renderedBreadcrumbs}</div>;
}

export default Breadcrumb;
