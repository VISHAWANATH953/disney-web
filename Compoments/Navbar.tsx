import styles from "../styles/compoments/navbar.module.scss"
import Link from 'next/link'
const prefix: string = process.env.NEXT_PUBLIC_BASE_PATH || '';
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <header>
                <img src={prefix+"/images/logo.svg"} alt="Disney" />
            </header>
            <ul>
                <li><Link href="/Main"><a><img src={prefix+"/images/home-icon.svg"} alt="home" /><span>HOME</span></a></Link></li>
                <li><Link href="/Main"><a><img src={prefix+"/images/search-icon.svg"} alt="search" /><span>SEARCH</span></a></Link></li>
                <li><Link href="/Main"><a><img src={prefix+"/images/watchlist-icon.svg"} alt="plus" /> <span>WATCHLIST</span></a></Link></li>
                <li><Link href="/Main"><a><img src={prefix+"/images/original-icon.svg"} alt="start" /><span>ORIGINALS</span></a></Link></li>
                <li><Link href="/Main"><a><img src={prefix+"/images/movie-icon.svg"} alt="movies" /><span>MOVIES</span></a></Link></li>
                <li><Link href="/Main"><a><img src={prefix+"/images/series-icon.svg"} alt="series" /><span>SERIES</span></a></Link></li>
            </ul>
            <div className={styles.user}>
                <img src="https://htmlcolors.com/img/change-user.png" alt="User" />
            </div>
        </nav>
    )
}

export default Navbar
