import React from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import ProfileImg from "../../images/profileImg.jpg";
import "./styles.scss";

// create pages list
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  // set toggleIcon useState
  const [toggleIcon, setToggleIcon] = React.useState(false);

  // create handleToggleIcon method
  const handleToggleIcon = () => {
    setToggleIcon((prev) => !prev);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <img
            className="navbar__container_profileImg"
            alt="Profile"
            src={ProfileImg}
          />
        </div>

        {/* Pages menu list */}
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__link"
                to={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Icon for mobile view */}
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
