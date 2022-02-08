import styles from "../styles/pages/index.module.scss";
import { prefix } from "../constants";
import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className={styles.index}>
      <img
        className={styles.inimg}
        src={prefix + "/images/login-background.jpg"}
        alt="login background"
      />
      <div className={styles.content}>
        <img
          src={prefix + "/images/cta-logo-one.svg"}
          alt="disney hulu espn+"
        />
        <Link href="/Main">GET ALL THERE</Link>
        <p>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img
          src={prefix + "/images/cta-logo-two.png"}
          alt="disney pixar marvel starwars national geopgraphic"
        />
      </div>
    </div>
  );
};
export default Home;
