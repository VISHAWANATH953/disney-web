import styles from "../../styles/components/smimgbox.module.scss";
import SmBox from "./SmBox";
import { prefix } from "../../constants";
import { FC } from "react";

const SmImgBox: FC = () => {
  return (
    <div className={styles.smbox}>
      <SmBox
        styles={styles}
        prefix={prefix}
        imgSrc="/images/viewers-disney.png"
        videoSrc="/videos/1564674844-disney.mp4"
        alt="disney"
      />
      <SmBox
        styles={styles}
        prefix={prefix}
        imgSrc="/images/viewers-pixar.png"
        videoSrc="/videos/1564676714-pixar.mp4"
        alt="pixar"
      />
      <SmBox
        styles={styles}
        prefix={prefix}
        imgSrc="/images/viewers-marvel.png"
        videoSrc="/videos/1564676844-marvel.mp4"
        alt="DC"
      />
      <SmBox
        styles={styles}
        prefix={prefix}
        imgSrc="/images/viewers-starwars.png"
        videoSrc="/videos/1608229455-star-wars.mp4"
        alt="star wars"
      />
      <SmBox
        styles={styles}
        prefix={prefix}
        imgSrc="/images/viewers-national.png"
        videoSrc="/videos/1564676296-national-geographic.mp4"
        alt="national geographic"
      />
    </div>
  );
};

export default SmImgBox;
