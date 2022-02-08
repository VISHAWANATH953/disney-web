import ImgSlider from '../components/imgSlider'
import styles from "../styles/pages/main.module.scss"
import SmImgBox from "../components/smImgBox"
import LgImgBox from "../components/lgImgBox"
const prefix: string = process.env.NEXT_PUBLIC_BASE_PATH || '';
import React from "react"
const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            <img className={styles.maimg} src={prefix + "/images/home-background.png"} alt="login background" />
            <ImgSlider />
            <SmImgBox />
            <LgImgBox />
        </main>
    )
}
export default Main