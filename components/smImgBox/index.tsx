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
        videoSrc="/videos/disney.mp4"
        alt="disney"
      />
      <SmBox
        styles={styles}
        prefix={prefix}
        imgSrc="/images/viewers-pixar.png"
        videoSrc="/videos/pixar.mp4"
        alt="pixar"
      />
      <SmBox
        styles={styles}
        prefix={prefix}
        imgSrc="/images/viewers-marvel.png"
        videoSrc="/videos/marvel.mp4"
        alt="DC"
      />
      <SmBox
        styles={styles}
        prefix={prefix}
        imgSrc="/images/viewers-starwars.png"
        videoSrc="/videos/star-wars.mp4"
        alt="star wars"
      />
      <SmBox
        styles={styles}
        prefix={prefix}
        imgSrc="/images/viewers-national.png"
        videoSrc="/videos/ngo.mp4"
        alt="national geographic"
      />
    </div>
  );
};

export default SmImgBox;
