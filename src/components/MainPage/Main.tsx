import React from "react";
import styled from "styled-components";
import { Home } from "../Home/Home";
import { Navbar } from "../Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { DestinationContent } from "../DestinationContent/DestinationContent";

type IStyledProps = {
  pathname: string;
};

export const Main = () => {
  let location = useLocation();

  return (
    <MainContainer pathname={location.pathname}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<DestinationContent />} />
      </Routes>
    </MainContainer>
  );
};

const MainContainer = styled.div<IStyledProps>`
  width: 100%;
  min-height: 100vh;
  background-image: url(${(props) => props.pathname === "/" ? "/assets/home/background-home-desktop.jpg" : props.pathname === "/destination" ? "/assets/destination/background-destination-desktop.jpg" : props.pathname === "/crew" ? "/assets/crew/background-crew-desktop.jpg" : "/assets/technology/background-technology-desktop.jpg" });
  background-position: center;
  background-size: cover;
`;
