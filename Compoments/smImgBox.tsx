import styles from "../styles/compoments/smimgbox.module.scss"
const SmImgBox = () => {
    return (
        <div className={styles.smbox}>
            <div className={styles.smimgbox}>
                <img src="images/viewers-disney.png" alt="disney" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="videos/1564674844-disney.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.smimgbox}>
                <img src="images/viewers-pixar.png" alt="pixar" />
                <video autoPlay={true} loop={true} playsInline={true} >
                    <source src="videos/1564676714-pixar.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.smimgbox}>
                <img src="images/viewers-marvel.png" alt="marvel" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="videos/1564676115-marvel.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.smimgbox}>
                <img src="images/viewers-starwars.png" alt="starwars" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="videos/1608229455-star-wars.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.smimgbox}>
                <img src="images/viewers-national.png" alt="netgographi" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="videos/1564676296-national-geographic.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default SmImgBox
