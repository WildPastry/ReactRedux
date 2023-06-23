import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppTheme from "../components/AppTheme";
import { Container } from "react-bootstrap";
import { HamburgerSqueeze } from "react-animated-burgers";
import { RootState } from "../redux/reducers/rootReducer";
import { setNav } from "../redux/slices/navSlice";

// Nav
const Nav: React.FC = () => {
  // UseSelector for app theme and navigation
  const appTheme = useSelector((state: RootState) => {
    return state.setTheme.appTheme;
  });

  const currentSection = useSelector((state: RootState) => {
    return state.setNav.currentSection;
  });

  // Dispatch
  const dispatch = useDispatch();

  // Handle function for navigation
  const handleNav = (section: string) => {
    dispatch(setNav(section));
    window.scrollTo(0, 0);
  };

  // Logic functions for hamburger and mobile menu
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () =>
    showMenu === false ? setShowMenu(true) : setShowMenu(false);

  // Logic for rendering collapsed menu
  let collapseMenu: JSX.Element;

  if (showMenu === true) {
    collapseMenu = (
      <div className={"menuActive"}>
        <h4
          aria-label="Gallery Button Mobile"
          onClick={() => handleNav("GALLERY")}
          className={`${
            currentSection === "GALLERY"
              ? `menuActiveItem navItemCollapse${appTheme} navItemActiveCollapse${appTheme}`
              : `menuActiveItem navItemCollapse${appTheme}`
          }`}
        >
          GALLERY
        </h4>
        <h4
          aria-label="About Button Mobile"
          onClick={() => handleNav("ABOUT")}
          className={`${
            currentSection === "ABOUT"
              ? `menuActiveItem navItemCollapse${appTheme} navItemActiveCollapse${appTheme}`
              : `menuActiveItem navItemCollapse${appTheme}`
          }`}
        >
          ABOUT
        </h4>
      </div>
    );
  }

  return (
    <header aria-label="Header Section">
      <nav aria-label="Navigation Section" className={`navWrap bg${appTheme}`}>
        <Container fluid className="navMenuWrap">
          <div className="nav pad">
            <p
              aria-label="Mike Parker Portfolio"
              className={`brand${appTheme}`}
              onClick={() => handleNav("GALLERY")}
            >
              mike parker <span className="text300"> portfolio </span>
            </p>
            <div className="menu flex">
              <h4
                aria-label="Gallery Button"
                onClick={() => handleNav("GALLERY")}
                className={`${
                  currentSection === "GALLERY"
                    ? `navItem${appTheme} navItemActive${appTheme}`
                    : `navItem${appTheme}`
                }`}
              >
                GALLERY
              </h4>
              <h4
                aria-label="About Button"
                onClick={() => handleNav("ABOUT")}
                className={`${
                  currentSection === "ABOUT"
                    ? `navItem${appTheme} navItemActive${appTheme}`
                    : `navItem${appTheme}`
                }`}
              >
                ABOUT
              </h4>
              <AppTheme />
            </div>
            <div className="menuCollapse">
              <HamburgerSqueeze
                aria-label="Hamburger Menu"
                className="menuBurger"
                isActive={showMenu}
                toggleButton={toggleMenu}
                buttonWidth={30}
                barColor={`${appTheme === "DARK" ? "#fff" : "#292929"}`}
              />
            </div>
          </div>
          {collapseMenu}
        </Container>
      </nav>
    </header>
  );
};

// EXPORT Nav
Nav.displayName = "Nav";
export default Nav;
