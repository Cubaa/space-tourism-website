import React, { FC } from "react";
import styled from "styled-components";
import { NavMenu } from "./NavMenu";

export const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavLogo>
        <HomeLogo></HomeLogo>
      </NavLogo>
      <NavLine>
        <Line></Line>
      </NavLine>
      <NavbarWrapper>
        <NavMenu />
      </NavbarWrapper>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  width: 100%;
  height: 150px;
  padding: 2rem 0rem 2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavbarWrapper = styled.nav`
  width: 60%;
  height: 100%;
  display: flex;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  justify-content: center;
  align-items: center;
`;

const NavLine = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  margin: 0 -10% 0 12%;
  z-index: 99;
`;

const NavLogo = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeLogo = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 100;
`;
