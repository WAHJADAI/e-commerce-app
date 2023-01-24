import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const NavBarStyled = styled.nav`
  color: #60a5fa;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  background-color: white;
`;

const NameShop = styled.span`
  font-family: Explora, cursive;
  font-size: 90px;
  margin-left: 10%;
  text-align: -webkit-center;
  :hover {
    color: #d4d4d8;
  }
`;

const MenuNav = styled.ul`
  padding: 0;
  margin: 0;
  margin-right: 10%;
  list-style: none;
  display: flex;
  gap: 1rem;

  li {
    a {
      text-decoration: none;
      color: #60a5fa;
      :hover {
        color: #d4d4d8;
      }
    }
  }
`;

const Links = [
  { name: "Home", path: "/" },
  { name: "about", path: "/about" },
  { name: "Sign In", path: "/SignIn" },
];

function Navbar() {
  return (
    <>
      <NavBarStyled>
        <NameShop>ShopWah</NameShop>
        <MenuNav>
          {Links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </MenuNav>
      </NavBarStyled>
      <Outlet />
    </>
  );
}

export default Navbar;
