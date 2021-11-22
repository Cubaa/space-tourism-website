import gsap, { Power1 } from "gsap/all";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export const HomeContent = () => {
  const homeInfoFirstParagraphRef = useRef(null);
  const homeInfoTitleRef = useRef(null);
  const homeInfoSecondParagraphRef = useRef(null);
  const homeContentMottoRef = useRef(null);
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();

  useEffect(() => {
    tl.set(
      [homeInfoFirstParagraphRef.current, homeInfoSecondParagraphRef.current],
      { opacity: 0, y: 55, ease: Power1.easeIn }
    );
    tl.set(homeInfoTitleRef.current, {
      opacity: 0,
      x: -55,
      ease: Power1.easeIn,
    });
    tl2.set(homeContentMottoRef.current, {
      opacity: 0,
      x: 155,
      ease: Power1.easeIn,
    });
    tl.fromTo(
      homeInfoFirstParagraphRef.current,
      { opacity: 0, y: 55 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
    tl.to(homeInfoTitleRef.current, {
      opacity: 1,
      duration: 0.8,
      x: 0,
      delay: 0,
    });
    tl.fromTo(
      homeInfoSecondParagraphRef.current,
      { opacity: 0, y: 55 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    tl2.to(homeContentMottoRef.current, {
      opacity: 1,
      duration: 0.8,
      x: 0,
      delay: 0,
    });
  }, []);

  return (
    <>
      <HomeContentInfoWrapper>
        <HomeInfo>
          <HomeInfoFirstParagraph ref={homeInfoFirstParagraphRef}>
            so, you want to travel to
          </HomeInfoFirstParagraph>
          <HomeInfoTitle ref={homeInfoTitleRef}>space</HomeInfoTitle>
          <HomeInfoSecondParagraph ref={homeInfoSecondParagraphRef}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </HomeInfoSecondParagraph>
        </HomeInfo>
      </HomeContentInfoWrapper>
      <HomeContentMottoWrapper>
        <HomeContentMotto ref={homeContentMottoRef}>
          <HomeMottoParagraph>explore</HomeMottoParagraph>
        </HomeContentMotto>
      </HomeContentMottoWrapper>
    </>
  );
};

const HomeContentInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 600px;
`;
const HomeContentMottoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  min-height: 40px;
`;
const HomeInfoFirstParagraph = styled.p`
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  margin-bottom: 24px;
  letter-spacing: 2px;
  font-weight: 300;
  overflow: hidden;
  opacity: 0;
`;
const HomeInfoTitle = styled.p`
  text-transform: uppercase;
  font-family: "Bellefair", serif;
  font-size: 150px;
  opacity: 0;
`;
const HomeInfoSecondParagraph = styled.p`
  margin-top: 24px;
  min-height: 50px;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  line-height: 32px;
  width: 550px;
  font-weight: 200;
  letter-spacing: 2px;
  opacity: 0;
`;

const HomeContentMotto = styled.div`
  width: 274px;
  height: 274px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  margin-bottom: 50px;
  /* margin-left: 10px;
  margin-right: 100px; */
`;

const HomeMottoParagraph = styled.p`
  text-transform: uppercase;
  font-family: "Bellefair", serif;
  font-size: 32px;
  color: #0b0d17;
`;
