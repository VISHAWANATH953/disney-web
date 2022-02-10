import styled from "styled-components";
import { prefix } from "../constants";
import Link from "next/link";
import { FC } from "react";

const Home: FC = () => {
  return (
    <HomeCom>
      <InImg
        src={prefix + "/images/login-background.jpg"}
        alt="login background"
      />
      <Content>
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
      </Content>
    </HomeCom>
  );
};

const HomeCom = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 93vh;
  display: grid;
  place-items: center;
  z-index: 1;
  }
`;

const InImg = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: fill;
`;

const Content = styled.div`
    margin-bottom: 12.5rem;
    display: grid;
    place-items: center;
    grid-gap: 2rem;
    width: 90%;
    img {
      width: 100%;
    }
    a {
      background: #0063e5;
      font-size: 1.8rem;
      letter-spacing: 0.06rem;

      padding: 2rem 30%;
      border-radius: 0.5rem;
      transition: all 250ms ease 0s;
      &:hover {
        background: #0483ee;
      }
    }
    p {
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
    }
  @media screen and (min-width: 768px) {
      width: 50%;
      grid-gap: 0.8rem;
      a {
        padding: 2rem 40%;
      }`;

export default Home;
