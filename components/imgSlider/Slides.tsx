import { FC } from "react";

interface slideProps {
  imgSrc: string;
  alt: string;
  prefix: string;
  styles: any;
}

const Slides: FC<slideProps> = ({ styles, prefix, imgSrc, alt }) => {
  return (
    <div className={styles.wrap}>
      <img src={prefix + imgSrc} alt={alt} />
    </div>
  );
};

export default Slides;
