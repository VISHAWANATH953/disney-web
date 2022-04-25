import movies from "../../json/moviesData.json";
import styled from "styled-components";
import LgBox from "./LgBox";

const LgImgBox= () => {
  const movie = Object.entries(movies.movies);
  return (
    <LgImgBoxs>
      {movie.map((movie, i: number) => {
        let hayData = movie[1].cardImg;
        return <LgBox key={i} src={hayData} alt={movie[1].title} i={i} />;
      })}
    </LgImgBoxs>
  );
};


const LgImgBoxs = styled.div`
display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  width: 100vw;`

export default LgImgBox;
