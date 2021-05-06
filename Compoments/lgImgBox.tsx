import styles from "../styles/compoments/lgimgbox.module.scss"
import movies from "../json/moviesData.json"
import Link from 'next/link'
const LgImgBox = () => {
        const movie = Object.entries(movies.movies);
        return (
                <div className={styles.lgbox}>
                        {
                                movie.map((movie, i) => {
                                        let hayData = movie[1].cardImg;
                                        return (
                                                <Link href={`/details/${i}`} key={i}>
                                                        <div className={styles.lgimgbox} >
                                                                <img src={hayData} alt={"pixar"} />
                                                        </div>
                                                </Link>
                                        )
                                })
                        }
                </div>
        )
}

export default LgImgBox
