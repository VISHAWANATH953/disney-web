import styles from "../../styles/pages/datails.module.scss"
import data from "../../json/moviesData.json"
const movies = Object.entries(data.movies)
const prefix: string = process.env.NEXT_PUBLIC_BASE_PATH || ''
import { useRouter} from 'next/router'
const details = () => {
    const pa: any = useRouter()
    const param: any = pa.query
    const movie:any = movies[param.id || 0][1];
    return(
        <div className={styles.details}>
            <img src={movie.backgroundImg} alt={movie.title} className={styles.backImg} />
            <div className={styles.img}>
                <img src={movie.titleImg} alt={movie.title} />
            </div>
            <div className={styles.info}>
                <div className={styles.btns}>
                    <a className={styles.one}><img src={prefix + `/images/play-icon-black.png`} alt="Group" />PLAY</a>
                    <a className={styles.btntwo}><img src={prefix + `/images/play-icon-white.png`} alt="Group" />TRAILER</a>
                    <a className={styles.smone}><span>+</span></a>
                    <a className={styles.smtwo}> <img src={prefix + `/images/group-icon.png`} alt="Group" /> </a>
                </div>
                <div className={styles.two}>
                    <p className={styles.sm}>{movie.subTitle}</p>
                    <p className={styles.lg}>
                        {movie.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default details
