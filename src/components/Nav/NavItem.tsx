import { ElementType } from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import "./NavItem.scss";

type Props = {
  route: string;
  icons: [ElementType, ElementType];
};

const NavItem: React.FC<Props> = ({
  route,
  icons: [FillIcon, OutlineIcon],
}: Props) => {
  let isSelected = false;
  const location = useLocation();
  if (location.pathname === route) {
    isSelected = true;
  }
  return (
    <div className="nav-item">
      <Link to={route}>
        <IconContext.Provider value={{ size: "2.5rem" }}>
          {isSelected ? <OutlineIcon /> : <FillIcon />}
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default NavItem;
