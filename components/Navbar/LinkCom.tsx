import React from 'react'
import Link from "next/link";

interface linkProps {
  prefix: string;
  imgSrc: string;
  span?: string;
  alt: string;
}

const LinkCom: React.FC<linkProps> = ({ prefix, imgSrc, span, alt }) => {
  return (
    <Link href="/Main">
      <a>
        <img src={prefix + imgSrc} alt={alt} />
        {span && <span>{span}</span>}
      </a>
    </Link>
  );
};

export default LinkCom;
