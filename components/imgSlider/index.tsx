import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import Slides from "./Slides";
import { prefix } from "../../constants";
import { FC } from "react";

const ImgSlider: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <SliderCom {...settings}>
      <Slides prefix={prefix} imgSrc={"/images/slider-badag.jpg"} alt={"hay"} />
      <Slides
        prefix={prefix}
        imgSrc={"/images/slider-badging.jpg"}
        alt={"hay"}
      />
      <Slides prefix={prefix} imgSrc={"/images/slider-scale.jpg"} alt={"hay"} />
      <Slides
        prefix={prefix}
        imgSrc={"/images/slider-scales.jpg"}
        alt={"hay"}
      />
    </SliderCom>
  );
};

const SliderCom = styled(Slider)`
  margin-top: 1.5rem 0;
  width: 99vw;
  ul li button::before {
    color: #f9f9f9;
    font-size: 1rem;
  }
  button {
    display: none !important;
  }

  @media screen and (min-width: 768px) {
    width: 96%;

    button {
      display: block !important;
    }
  }
`;

export default ImgSlider;
