import gsap, { Power1 } from "gsap/all";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { HomeContent } from "./HomeContent/HomeContent";

export const Home = () => {
  const homeContainerRef = useRef(null);

  // const tl = gsap.timeline();
  // useEffect(() => {
  //   tl.from(homeContainerRef.current, {
  //     autoAlpha: 0,
  //     duration: 0.2,
  //     ease: Power1.easeIn,
  //   });
  // }, [homeContainerRef.current]);

  return (
    <HomeContainer ref={homeContainerRef}>
      <HomeWrapper>
        <HomeContent />
      </HomeWrapper>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  width: 100%;
  background-color: transparent;
  color: white;
  padding: 1rem 0rem 1rem 5rem;

  @media (max-width: 931px) {
    padding: 1rem 0rem 1rem 2rem;
  }
`;

const HomeWrapper = styled.div`
  height: 100%;
  display: flex;
`;
