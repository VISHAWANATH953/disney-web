import styles from "../styles/compoments/lgimgbox.module.scss"
import movies from "../json/moviesData.json"
const LgImgBox = () => {
        const movie = Object.entries(movies.movies);
        return (
                <div className={styles.lgbox}>
                        {
                                movie.map((movie, i) => {
                                        let hayData = movie[1].cardImg;
                                        return (
                                                <div className={styles.lgimgbox} key={i}>
                                                        <img src={hayData} alt={"pixar"} />
                                                </div>
                                        )
                                })
                        }
                </div>
        )
}

export default LgImgBox
