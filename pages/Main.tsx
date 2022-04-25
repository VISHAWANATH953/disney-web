import ImgSlider from "../components/imgSlider";
import SmImgBox from "../components/smImgBox";
import LgImgBox from "../components/LgImgBox";
import { prefix } from "../constants";
import styled from "styled-components";

const Main = () => {
  return (
    <MainCom>
      <MainImg
        src={prefix + "/images/home-background.png"}
        alt="login background"
      />
      <ImgSlider />
      <SmImgBox />
      <LgImgBox />
    </MainCom>
  );
};

const MainCom = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  z-index: 1;
  width: 100%;
`;

const MainImg = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: fill;
`;

export default Main;
