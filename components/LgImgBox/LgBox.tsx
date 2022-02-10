import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

interface boxProps {
  src: string;
  alt: string;
  i: number;
}

const LgBox: FC<boxProps> = ({ src, alt, i }) => {
  return (
    <Link href={`/details/${i}`} key={i}>
      <LgBoxes>
        <img src={src} alt={alt} />
      </LgBoxes>
    </Link>
  );
};

const LgBoxes = styled.div`
  cursor: pointer;
  overflow: hidden;
  margin: 0.8rem 0;
  width: 22vmax;
  height: 18vmax;
  background: transparent;
  transition: all 250ms ease 0s;
  border: 0.3rem solid #f9f9f91a;
  border-radius: 1.4rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  &:hover {
    transform: scale(1.05);
    border-radius: 1.4rem;
    border-color: #ffffffe5;
  }

  @media screen and (min-width: 768px) {
    width: 30rem !important;
    height: 22.5rem !important;
  }
`;

export default LgBox;
