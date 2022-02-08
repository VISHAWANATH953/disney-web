import { FC } from "react";
import ImgSlider from "../components/imgSlider";
import styles from "../styles/pages/main.module.scss";
import SmImgBox from "../components/smImgBox";
import LgImgBox from "../components/LgImgBox";
import { prefix } from "../constants";

const Main: FC = () => {
  return (
    <main className={styles.main}>
      <img
        className={styles.maimg}
        src={prefix + "/images/home-background.png"}
        alt="login background"
      />
      <ImgSlider />
      <SmImgBox />
      <LgImgBox />
    </main>
  );
};
export default Main;
