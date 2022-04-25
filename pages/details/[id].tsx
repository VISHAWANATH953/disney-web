import data from "../../json/moviesData.json";
import { prefix } from "../../constants";
import styled from "styled-components";

const details = ({movie}:any) => {
  return (
    <Detail>
      <BackImg src={movie.backgroundImg} alt={movie.title} />
      <Img>
        <img src={movie.titleImg} alt={movie.title} />
      </Img>
      <Info>
        <Btns>
          <One>
            <img src={prefix + `/images/play-icon-black.png`} alt="Group" />
            PLAY
          </One>
          <BtnTwo>
            <img src={prefix + `/images/play-icon-white.png`} alt="Group" />
            TRAILER
          </BtnTwo>
          <SmOne>
            <span>+</span>
          </SmOne>
          <SmTwo>
            <img src={prefix + `/images/group-icon.png`} alt="Group" />
          </SmTwo>
        </Btns>
        <Two>
          <p className="sm">{movie.subTitle}</p>
          <p className="lg">{movie.description}</p>
        </Two>
      </Info>
    </Detail>
  );
};

export const getServerSideProps = async (pageContext:any)=>{

const movies = await Object.entries(data.movies);
  const param: any = pageContext.query.id;
  const movie: any = movies[param || 0][1];
  return{
    props:{
    movie
    }
  }
}

const Detail = styled.div`
  position: relative;
  width: 100%;
  height: 93vh;
  color: #f9f9f9;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  z-index: 2;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #00000033;
    z-index: 0;
  }

  @media screen and (min-width: 768px) {
    padding: 5rem;
  }
`;

const SmTwo = styled.a`
  height: 5rem;
  width: 8rem;
  background-color: #00000099;
  border-radius: 50%;
  border: 0.2rem solid #fff;
  cursor: pointer;
`;

const SmOne = styled(SmTwo)`
  margin: 0 0.5rem;
  span {
    font-size: 5rem;
    transform: scale(1.15);
    margin-bottom: 0.85rem;
    padding: 0.5rem;
  }
`;

const BackImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const Img = styled.div`
  width: 45rem;
  height: 25rem;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  z-index: 2;
  padding-left: 1rem;
`;

const Two = styled.div`
  width: 70%;
  padding-left: 2rem;
  .sm {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
  .lg {
    font-size: 1.9rem;
  }
`;

const BtnTwo = styled.a`
  border-radius: 0.5rem;
  color: #f9f9f9;
  padding: 0.5rem 2.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 0.1rem solid #fff;
  &:hover {
    background: #f9f9f954;
  }
  margin: 0 0.5rem;
`;

const One = styled.a`
  border-radius: 0.5rem;
  color: #000;
  background: #f9f9f9;
  padding: 0.5rem 1.5rem;
  &:hover {
    opacity: 0.5;
  }
`;

const Btns = styled.div`
  padding-left: 5rem;
  width: 35rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row nowrap;
  margin-bottom: 1rem;
  a {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
  }
`;

export default details;
