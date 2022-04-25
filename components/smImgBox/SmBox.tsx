import styled from "styled-components";
import React from 'React'

interface boxProps {
  prefix: string;
  imgSrc: string;
  videoSrc: string;
  alt: string;
}

const SmBox:React.FC<boxProps> = ({ prefix, imgSrc, videoSrc, alt }) => {
  return (
    <SmImgBox>
      <img src={prefix + imgSrc} alt={alt} />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={prefix + videoSrc} type="video/mp4" />
      </video>
    </SmImgBox>
  );
};

const SmImgBox = styled.div`
  cursor: pointer;
  flex: 1;
  height: 10vh;
  max-height: 20rem;
  margin: 0 0.85vmax;
  position: relative;
  background: transparent;
  transition: all 250ms ease 0s;
  border-radius: 1.4rem;
  overflow: hidden;
  border: 0.3rem solid #f9f9f91a;
  box-shadow: rgb(0 0 0 / 69%) 0 2.6rem 3rem -1rem,
    rgb(0 0 0 / 73%) 0 1.6rem 1rem -1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    z-index: 1;
    position: absolute;
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  
  @media screen and (min-width: 768px) {
    height: 20vh;
  }
`;

export default SmBox;
