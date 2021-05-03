import styles from '../styles/pages/index.module.scss'
const prefix: string = process.env.NEXT_PUBLIC_BASE_PATH || '';
const Home = () => {
  return (
    <div className={styles.index}>
      <div className={styles.content}>
        <img src={prefix+"/images/cta-logo-one.svg"} alt="disney hulu espn+" />
        <a href="/Main">GET ALL THERE</a>
        <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
        <img src={prefix+"/images/cta-logo-two.png"} alt="disney pixar marvel starwars national geopgraphic" />
      </div>
    </div>
  )
}
export default Home
