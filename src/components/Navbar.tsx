import useAuthenticationContext from "hook/useAuthticationContext";
import useUserAuth from "hook/useUserAuth";
import React, { useMemo, useState } from "react";
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
  font-family: "Explora", cursive;
  font-size: 90px;
  margin-left: 10%;
  text-align: -webkit-center;
  :hover {
    color: #d4d4d8;
  }
`;
interface TypeChecked {
  checkTrueOrFalse?: boolean;
}
const MenuNav = styled.ul<TypeChecked>`
  padding: 0;
  margin: 0;
  margin-right: 10%;
  list-style: none;
  display: flex;
  align-items: center;
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

  @media screen and (max-width: 500px) {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 100%;
    background-color: black;
    flex-direction: column;

    clip-path: ${(props) =>
      props.checkTrueOrFalse ? "circle(75%)" : "circle(25px at calc(100% - 45px) 45px)"};
    li {
      margin: 15px 0;
      a {
        color: none;
        text-decoration: none;

        padding: 5px 30px;
        color: #fff;
        border-radius: 50px;
        background: #000;
        position: relative;
        line-height: 50px;
        transition: all 0.3s ease;
      }
    }
  }
`;
const CheckMenuNav = styled.input.attrs({ type: "checkbox" })`
  :checked {
    box-shadow: #115211;
    width: 10px;
    height: 10px;
    z-index: 2;
  }
`;

const SignOutButton = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #60a5fa;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px #d4d4d8;
  :hover {
    background-color: #152d73;
  }
  :active {
    background-color: #152d73;
    box-shadow: 0 0px;
    transform: translateY(3px);
  }
`;
const WrapBurger = styled.label`
  display: block;
`;

const Burger = styled.span`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
`;

// Shopwah

const Logo = styled.span`
  font-size: 25px;
  position: relative;
  top: 3px;
`;
const LogoH = styled.span`
  font-size: 50px;
`;
const Wrap = styled.div`
  position: relative;
  display: flex;
  :hover {
    color: #d4d4d8;
  }
`;
const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  flex-wrap: wrap;
`;
const LogoWa = styled.span`
  position: relative;
  top: -8px;
  font-size: 25px;

  position: relative;
`;
type NavbarPropTypes = {};
const links = [
  { name: "Home", path: "/" },
  { name: "about", path: "/about" },
  { name: "Sign In", path: "/SignIn" },
];
const pathForToken = ["/about"];
function Navbar({}: NavbarPropTypes) {
  const { token: myToken } = useAuthenticationContext();

  const { onSignOut } = useUserAuth();
  const menuList = useMemo(() => {
    if (myToken) {
      return links.filter((menu) => {
        return menu.path === "/" ? menu : pathForToken.includes(menu.path) ? menu : null;
      });
    } else return links;
  }, [myToken]);
  const [isChecked, setIsChecked] = useState(false);
  const handleIsChecked = (e) => {
    console.log("😂", e.target.checked);
    setIsChecked(e.target.checked);
  };
  return (
    <>
      <NavBarStyled>
        {/* <NameShop>ShopWah</NameShop>*/}
        <Wrap>
          <WrapText>
            <Logo>s</Logo>
            <LogoWa>wa</LogoWa>
          </WrapText>
          <LogoH>H</LogoH>
          <Logo>o</Logo>
          <Logo>p</Logo>
        </Wrap>
        <MenuNav checkTrueOrFalse={isChecked}>
          {menuList &&
            menuList.map((link, index) => (
              <li key={index}>
                <NavLink to={`${link.path}`}>{link.name}</NavLink>
              </li>
            ))}
          {myToken && (
            <li>
              <SignOutButton onClick={() => onSignOut()}>Sign Out</SignOutButton>
            </li>
          )}
        </MenuNav>
        <WrapBurger>
          <CheckMenuNav onChange={handleIsChecked} />
        </WrapBurger>
      </NavBarStyled>
      <Outlet />
    </>
  );
}

export default Navbar;
