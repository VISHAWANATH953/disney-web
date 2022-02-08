import { FC } from "react";
import Link from "next/link";

interface boxProps {
  src: string;
  alt: string;
  i: number;
  styles: any;
}

const LgBox: FC<boxProps> = ({ src, alt, i, styles }) => {
  return (
    <Link href={`/details/${i}`} key={i}>
      <div className={styles.lgimgbox}>
        <img src={src} alt={alt} />
      </div>
    </Link>
  );
};

export default LgBox;
