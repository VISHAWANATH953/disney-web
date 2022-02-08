import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/components/imgslider.module.scss";
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
    <Slider {...settings} className={styles.slide}>
      <Slides
        prefix={prefix}
        styles={styles}
        imgSrc={"/images/slider-badag.jpg"}
        alt={"hay"}
      />
      <Slides
        prefix={prefix}
        styles={styles}
        imgSrc={"/images/slider-badging.jpg"}
        alt={"hay"}
      />
      <Slides
        prefix={prefix}
        styles={styles}
        imgSrc={"/images/slider-scale.jpg"}
        alt={"hay"}
      />
      <Slides
        prefix={prefix}
        styles={styles}
        imgSrc={"/images/slider-scales.jpg"}
        alt={"hay"}
      />
    </Slider>
  );
};

export default ImgSlider;
