import {
  AiFillBell,
  AiFillHome,
  AiFillPhone,
  AiFillSetting,
  AiOutlineBell,
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import "./Nav.scss";
import NavItem from "./NavItem";

type Props = {};

const Nav: React.FC<Props> = () => (
  <nav>
    <NavItem route="/" icons={[AiOutlineHome, AiFillHome]} />
    <NavItem route="/config" icons={[AiOutlineSetting, AiFillSetting]} />
    <NavItem route="/notifications" icons={[AiOutlineBell, AiFillBell]} />
    <NavItem route="/contacts" icons={[AiOutlinePhone, AiFillPhone]} />
    <NavItem route="/account" icons={[FaRegUserCircle, FaUserCircle]} />
  </nav>
);

export default Nav;
