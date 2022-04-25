import LinkCom from "./LinkCom";
import { prefix } from "../../constants";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Head>
        <LinkComA prefix={prefix} imgSrc="/images/logo.svg" alt="logo" />
      </Head>
      <Ul>
        <li>
          <LinkComA
            prefix={prefix}
            imgSrc="/images/home-icon.svg"
            span="HOME"
            alt="home"
          />
        </li>
        <li>
          <LinkComA
            prefix={prefix}
            imgSrc="/images/search-icon.svg"
            span="SEARCH"
            alt="search"
          />
        </li>
        <li>
          <LinkComA
            prefix={prefix}
            imgSrc="/images/watchlist-icon.svg"
            alt="plus"
            span="WATCHLIST"
          />
        </li>
        <li>
          <LinkComA
            prefix={prefix}
            imgSrc="/images/original-icon.svg"
            span="ORIGINALS"
            alt="start"
          />
        </li>
        <li>
          <LinkComA
            prefix={prefix}
            imgSrc="/images/movie-icon.svg"
            span="MOVIES"
            alt="movies"
          />
        </li>
        <li>
          <LinkComA
            prefix={prefix}
            imgSrc="/images/series-icon.svg"
            span="SERIES"
            alt="series"
          />
        </li>
      </Ul>
      <User>
        <img src="https://htmlcolors.com/img/change-user.png" alt="User" />
      </User>
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
  z-index: 9999;
  background: #0000014d;
`;

const Head = styled.header`
  width: 8rem;
  height: 7rem;
  margin-left: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Ul = styled.ul`
  flex: 1;
  display: none;
  align-items: center;
  flex-flow: row nowrap;
  list-style: none;
  margin-left: 2rem;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const LinkComA = styled(LinkCom)`
      padding: 0 1rem;
      letter-spacing: 0.2rem;
      font-weight: 400;
      display: flex;
      font-size: 1.5rem;
      align-items: center;
      img {
        width: 2.3rem;
        height: 2.3rem;
      }
      span {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          right: 0;
          left: 0;
          bottom: -0.3rem;
          height: 0.2rem;
          background: #f9f9f9;
          transform: scaleX(0);
          transition: all 250ms ease 0s;
        
        &:hover::before {
          transform: scaleX(1);
        }
      }
`;

const User = styled.div`
  padding-right: 1rem;
  height: 4rem;
  width: 4.5rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Navbar;
