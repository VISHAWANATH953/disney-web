import styles from "../../styles/components/navbar.module.scss";
import LinkCom from "./LinkCom";
import { prefix } from "../../constants";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <header>
        <LinkCom prefix={prefix} imgSrc="/images/logo.svg" alt="logo" />
      </header>
      <ul>
        <li>
          <LinkCom
            prefix={prefix}
            imgSrc="/images/home-icon.svg"
            span="HOME"
            alt="home"
          />
        </li>
        <li>
          <LinkCom
            prefix={prefix}
            imgSrc="/images/search-icon.svg"
            span="SEARCH"
            alt="search"
          />
        </li>
        <li>
          <LinkCom
            prefix={prefix}
            imgSrc="/images/watchlist-icon.svg"
            alt="plus"
            span="WATCHLIST"
          />
        </li>
        <li>
          <LinkCom
            prefix={prefix}
            imgSrc="/images/original-icon.svg"
            span="ORIGINALS"
            alt="start"
          />
        </li>
        <li>
          <LinkCom
            prefix={prefix}
            imgSrc="/images/movie-icon.svg"
            span="MOVIES"
            alt="movies"
          />
        </li>
        <li>
          <LinkCom
            prefix={prefix}
            imgSrc="/images/series-icon.svg"
            span="SERIES"
            alt="series"
          />
        </li>
      </ul>
      <div className={styles.user}>
        <img src="https://htmlcolors.com/img/change-user.png" alt="User" />
      </div>
    </nav>
  );
};

export default Navbar;
