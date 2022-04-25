import SmBox from "./SmBox";
import { prefix } from "../../constants";
import styled from "styled-components";

const SmImgBox = () => {
  return (
    <SmBoxCom>
      <SmBox
        prefix={prefix}
        imgSrc="/images/viewers-disney.png"
        videoSrc="/videos/disney.mp4"
        alt="disney"
      />
      <SmBox
        prefix={prefix}
        imgSrc="/images/viewers-pixar.png"
        videoSrc="/videos/pixar.mp4"
        alt="pixar"
      />
      <SmBox
        prefix={prefix}
        imgSrc="/images/viewers-marvel.png"
        videoSrc="/videos/marvel.mp4"
        alt="DC"
      />
      <SmBox
        prefix={prefix}
        imgSrc="/images/viewers-starwars.png"
        videoSrc="/videos/star-wars.mp4"
        alt="star wars"
      />
      <SmBox
        prefix={prefix}
        imgSrc="/images/viewers-national.png"
        videoSrc="/videos/ngo.mp4"
        alt="national geographic"
      />
    </SmBoxCom>
  );
};

const SmBoxCom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row nowrap;
  width: 100%;
  height: 15vh;
  max-height: 30rem;
  :hover {
    video {
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    height: 30vh;
  }
`;

export default SmImgBox;
