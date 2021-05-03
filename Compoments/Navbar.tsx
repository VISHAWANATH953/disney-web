import styles from "../styles/compoments/navbar.module.scss"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <header>
                <img src="/images/logo.svg" alt="Disney" />
            </header>
            <ul>
                <li><img src="/images/home-icon.svg" alt="home" /><span>HOME</span></li>
                <li><img src="/images/search-icon.svg" alt="search" /><span>SEARCH</span></li>
                <li><img src="/images/watchlist-icon.svg" alt="plus" /> <span>WATCHLIST</span></li>
                <li><img src="/images/original-icon.svg" alt="start" /><span>ORIGINALS</span></li>
                <li><img src="/images/movie-icon.svg" alt="movies" /><span>MOVIES</span></li>
                <li><img src="/images/series-icon.svg" alt="series" /><span>SERIES</span></li>
            </ul>
            <div className={styles.user}>
                <img src="https://htmlcolors.com/img/change-user.png" alt="User" />
            </div>
        </nav>
    )
}

export default Navbar
