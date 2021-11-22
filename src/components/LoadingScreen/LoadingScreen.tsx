import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import gsap, { Power3 } from "gsap";

export const LoadingScreen: FC = () => {
  const loadingScreenContainer = useRef(null);

  const tl = gsap.timeline();
  useEffect(() => {
    gsap.to(loadingScreenContainer.current, {
      x: "100%",
      ease: Power3.easeInOut,
      delay: 0.25,
      duration: 1.5,
    });
  }, []);

  return (
    <LoadingScreenContainer ref={loadingScreenContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 800">
        {/* <path id="path" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" stroke-dasharray="10 20.1" d="M1,251 q138.5,0.5 241,-32 q118,-42 124,-121 q-18,-79 -114,-91 q-156,5 -142,119 q19,62 169,105 q88,27 219,19"/> */}
        <g className="rocket">
          <g fill="#fff">
            <path
              d="M77.4 651.4a13.3 13.3 0 00-14.8-11.6c-19 2.2-29.8 17-55.5 20 25.7-3 39.7 8.7 58.7 6.4a13.3 13.3 0 0011.6-14.8z"
              opacity=".5"
            />
            <path d="M77.4 651.4a9 9 0 00-9.9-7.8c-12.7 1.5-20 11.4-37.1 13.4 17.2-2 26.5 5.8 39.2 4.3a9 9 0 007.8-9.9z" />
          </g>
          <g fill="#63c6be">
            <path d="M111.9 669.7l-15.1 13.7a8.4 8.4 0 01-6.7 2.1l-23-2.8a1 1 0 01-1-1.1 1 1 0 01.2-.5l14-19.7z" />
            <path d="M106.7 625.4L89 615.5a8.4 8.4 0 00-7-.5l-21.8 8a1 1 0 00-.3 1.7l18.2 16z" />
          </g>
          <path
            fill="#fff"
            d="M173.2 640.3c-18.8-18.2-72-23.2-94.7-4a2.6 2.6 0 00-1 2.2l3 25a2.6 2.6 0 001.4 2c26.4 13.6 77-3.3 91.3-25.2z"
          />
          <path
            fill="#63c6be"
            d="M173.2 640.3a63.6 63.6 0 00-30.8-14c-.4-6.5 4 34.5 4 34.5a63.7 63.7 0 0026.8-20.5z"
          />
          <circle
            cx="123.2"
            cy="646"
            r="11.7"
            fill="#63c6be"
            transform="rotate(-49.2 123.2 646)"
          />
          <path
            fill="#22173f"
            d="M125.7 655a9.4 9.4 0 116.6-11.5 9.4 9.4 0 01-6.6 11.6z"
          />
        </g>
      </svg>
    </LoadingScreenContainer>
  );
};

const LoadingScreenContainer = styled.div`
  position: absolute;
  z-index: 9999;
  margin: 0 auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 1440px;
  height: 100vh;
  background-color: #000;
`;
