import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

import { userAuthContext } from "../Context/context";
const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  var context = useContext(userAuthContext);

  const checkIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" expand="lg" dark className="container bg-Nav">
      <NavbarBrand className="m-0 p-0">
        <Link
          id="RouterNavLink"
          to="/"
          className="navClass text-white navFont "
        >
          CalorieFit
        </Link>
      </NavbarBrand>
      <NavbarText className="d-flex">
        <span className="text-center commonFont mx-4">
          {context.user?.email ? `Hi, ${context.user.email}` : ""}
        </span>
      </NavbarText>
      {isOpen === true ? (
        <FaTimes onClick={checkIsOpen} />
      ) : (
        <NavbarToggler onClick={checkIsOpen} />
      )}
      <Collapse isOpen={isOpen} navbar className="navItems">
        <Nav navbar>
          {context.user?.uid ? (
            <>
              <NavItem className="text-center">
                <NavLink
                  tag={Link}
                  id="RouterNavLink"
                  className="navClass text-white m-2 navFontTwo"
                  to="/logoutsection"
                >
                  Logout
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem className="text-center">
                <NavLink
                  id="RouterNavLink"
                  tag={Link}
                  className="navClass text-white m-2 navFontTwo"
                  to="/signin"
                >
                  SignIn
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <NavLink
                  id="RouterNavLink"
                  tag={Link}
                  className="navClass text-white m-2 navFontTwo"
                  to="/signup"
                >
                  SignUp
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarSection;
