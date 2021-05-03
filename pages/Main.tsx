import ImgSlider from '../Compoments/imgSlider'
import styles from "../styles/pages/main.module.scss"
import SmImgBox from "../Compoments/smImgBox"
import LgImgBox from "../Compoments/lgImgBox"
import React from "react"
const Main:React.FC = () => {
    return (
        <main className={styles.main}>
            <ImgSlider />
            <SmImgBox />
            <LgImgBox/>
        </main>
    )
}
export default Main