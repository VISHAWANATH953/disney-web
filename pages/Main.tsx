import ImgSlider from '../Compoments/imgSlider'
import styles from "../styles/pages/main.module.scss"
import SmImgBox from "../Compoments/smImgBox"
import LgImgBox from "../Compoments/lgImgBox"
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