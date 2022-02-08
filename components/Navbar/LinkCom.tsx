import { FC } from "react";
import Link from "next/link";

interface linkProps {
  prefix: string;
  imgSrc: string;
  span?: string;
  alt: string;
}

const LinkCom: FC<linkProps> = ({ prefix, imgSrc, span, alt }) => {
  return (
    <Link href="/Main">
      <>
        <img src={prefix + imgSrc} alt={alt} />
        {span && <span>{span}</span>}
      </>
    </Link>
  );
};

export default LinkCom;
