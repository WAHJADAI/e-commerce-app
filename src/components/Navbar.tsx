import useUserAuth from "hook/useUserAuth";
import React, { ChangeEvent, useMemo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuthenticationStore from "store/authentication/authentication.store";
import useProfileStore from "store/profile/profile.store";
import styled, { css } from "styled-components";

const NavBarStyled = styled.div`
  color: #60a5fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: white;
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
    margin-right: 0;

    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 300vh;
    width: 100%;
    background-color: black;
    flex-direction: column;

    clip-path: ${(props) =>
      props.checkTrueOrFalse ? "circle(75%)" : "circle(0px at calc(100% - 45px) 45px)"};
    transition: all 0.3s ease-in-out;
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
  display: none;
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
  display: none;
  width: 75px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    z-index: 2;
  }
`;
const BurgerLine = styled.span<TypeChecked>`
  background: #60a5fa;
  border-radius: 10px;
  height: 7px;
  margin: 7px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  :nth-of-type(1) {
    width: 50%;
    ${(props) =>
      props.checkTrueOrFalse &&
      css`
        transform-origin: bottom;
        transform: rotatez(45deg) translate(8px, 0px);
      `}
  }

  :nth-of-type(2) {
    width: 100%;
    ${(props) =>
      props.checkTrueOrFalse &&
      css`
        transform-origin: top;
        transform: rotatez(-45deg);
      `}
  }

  :nth-of-type(3) {
    width: 75%;
    ${(props) =>
      props.checkTrueOrFalse &&
      css`
        transform-origin: bottom;
        width: 50%;
        transform: translate(30px, -11px) rotatez(45deg);
      `}
  }
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
const UserName = styled.div`
  background-color: #60a5fa;
  padding: 10px;
  color: white;
  clip-path: circle(20px);
`;
type NavbarPropTypes = {};
const links = [
  { name: "Home", path: "/" },
  { name: "about", path: "/about" },
  { name: "Sign In", path: "/SignIn" },
];
const pathForToken = ["/about"];
function Navbar({}: NavbarPropTypes) {
  const jwtToken = useAuthenticationStore((state) => state.jwt);

  const { onSignOut } = useUserAuth();
  const menuList = useMemo(() => {
    if (jwtToken) {
      return links.filter((menu) => {
        return menu.path === "/" ? menu : pathForToken.includes(menu.path) ? menu : null;
      });
    } else return links;
  }, [jwtToken]);
  const [isChecked, setIsChecked] = useState(false);
  const handleIsChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  const user = useProfileStore((state) => state.user);
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
          {jwtToken && (
            <li>
              <SignOutButton onClick={() => onSignOut()}>Sign Out</SignOutButton>
            </li>
          )}
          {user && (
            <li>
              <UserName>{user?.username.slice(0, 2).toUpperCase()}</UserName>
            </li>
          )}
        </MenuNav>
        <WrapBurger>
          <CheckMenuNav onChange={handleIsChecked} />
          <BurgerLine checkTrueOrFalse={isChecked}></BurgerLine>
          <BurgerLine checkTrueOrFalse={isChecked}></BurgerLine>
          <BurgerLine checkTrueOrFalse={isChecked}></BurgerLine>
        </WrapBurger>
      </NavBarStyled>
      <Outlet />
    </>
  );
}

export default Navbar;
