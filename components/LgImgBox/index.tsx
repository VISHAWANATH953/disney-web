import styles from "../../styles/components/lgimgbox.module.scss";
import movies from "../../json/moviesData.json";
import LgBox from "./LgBox";
import { FC } from "react";

const LgImgBox: FC = () => {
  const movie = Object.entries(movies.movies);
  return (
    <div className={styles.lgbox}>
      {movie.map((movie, i: number) => {
        let hayData = movie[1].cardImg;
        return (
          <LgBox
            key={i}
            src={hayData}
            alt={movie[1].title}
            i={i}
            styles={styles}
          />
        );
      })}
    </div>
  );
};

export default LgImgBox;
