import { FC } from "react";
import styled from "styled-components";

interface slideProps {
  imgSrc: string;
  alt: string;
  prefix: string;
}

const Slides: FC<slideProps> = ({ prefix, imgSrc, alt }) => {
  return (
    <Wrap>
      <img src={prefix + imgSrc} alt={alt} />
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 30vh;
  transition: all 250ms ease 0s;
  overflow-x: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    border: 0.15rem solid #f9f9f9;
  }
  @media screen and (min-width: 768px) {
    height: inherit;
  }
`;

export default Slides;
