import styles from "../styles/compoments/navbar.module.scss"
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <header>
                <img src="/images/logo.svg" alt="Disney" />
            </header>
            <ul>
                <li><span>HOME</span></li>
                <li><span>SEARCH</span></li>
                <li>+ <span>WATCHLIST</span></li>
                <li><span>ORIGINALS</span></li>
                <li><span>MOVIES</span></li>
                <li><span>SERIES</span></li>
            </ul>
            <div className="user">
                <img src="" alt="User" />
            </div>
        </nav>
    )
}

export default Navbar
