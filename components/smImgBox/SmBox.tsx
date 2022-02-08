import { FC } from "react";

interface boxProps {
  prefix: string;
  imgSrc: string;
  styles: any;
  videoSrc: string;
  alt: string;
}

const SmBox: FC<boxProps> = ({ prefix, styles, imgSrc, videoSrc, alt }) => {
  return (
    <div className={styles.smimgbox}>
      <img src={prefix + imgSrc} alt={alt} />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={prefix + videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default SmBox;
