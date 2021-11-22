import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navLinksData } from "../../Data/navLinksData";
import { INavLinkTypes } from "../../Types/navLinkTypes";

export const NavMenu: FC = () => {
  const [selected, setSelected] = useState<string>("00");
  return (
    <NavMenuWrapper>
      {navLinksData.map((link: INavLinkTypes) => {
        return (
          <NavMenuList
            key={link.id}
            className={`${selected === link.id ? "show" : "hide"}`}
            onFocus={() => setSelected(link.id)}
          >
            <NavMenuLinkNumber>{link.id}</NavMenuLinkNumber>
            <NavMenuLink to={link.href}>{link.name}</NavMenuLink>
          </NavMenuList>
        );
      })}
    </NavMenuWrapper>
  );
};

const NavMenuWrapper = styled.ul`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
`;

const NavMenuList = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  height: 100%;
  border-bottom: 2px solid transparent;
  transition: border 0.2s linear;
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: 0.2s linear;
    opacity: 0;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }

  &.show {
    border-bottom: 2px solid #fff;
    &:hover {
      &::after {
        opacity: 0;
      }
    }
  }
  &.hide {
    border-bottom: 2px solid transparent;
  }
`;
const NavMenuLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const NavMenuLinkNumber = styled.span`
  margin-right: 8px;
  color: #fff;
  font-weight: bolder;
  letter-spacing: 3px;

  @media (max-width: 1310px) {
    display: none;
  }
`;
