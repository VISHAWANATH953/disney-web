import styles from "../styles/pages/datails.module.scss"
const prefix: string = process.env.NEXT_PUBLIC_BASE_PATH || '';
const details = () => {
    return (
        <div className={styles.details}>
            <div className={styles.img}>
                <img src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"} alt="bao" />
            </div>
            <div className={styles.info}>
                <div className={styles.btns}>
                    <a className={styles.one}><img src={prefix+"/images/play-icon-black.png"} alt="Group" />PLAY</a>
                    <a className={styles.two}><img src={prefix+"/images/play-icon-white.png"} alt="Group" />TRAILER</a>
                    <a className={styles.smone}>+</a>
                    <a className={styles.smtwo}> <img src={prefix+"/images/group-icon.png"} alt="Group" /> </a>
                </div>
                <div className={styles.two}>
                    <p className={styles.sm}>2018 • 7m • Family, Fantasy, Kids, Animation</p>
                    <p className={styles.lg}>A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.</p>
                </div>
            </div>
        </div>
    )
}

export default details
