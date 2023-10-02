import styled from "styled-components";
import { theme } from "../../../theme/Theme";

export const ImageCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  min-height: 39rem;
  max-height: 50rem;
  border-bottom: 2px #f1dd56 solid;
  z-index: 1;
  img {
    width: 100%;
    aspect-ratio: 1/ 1;
  }

  h1 {
    font-family: "Roboto";
    font-size: 3.5rem;
    font-weight: semibold;
    letter-spacing: 0.1rem;
    padding-top: 2rem;
    position: absolute;
    z-index: 1;
  }

  h1 {
    color: #f1dd56;
  }
`;
export const Span = styled.span`
  font-family: "Roboto";
  font-size: 3.5rem;
  font-weight: semibold;
  letter-spacing: 0.1rem;
  color: ${theme.color.primaryYellow};
  position: absolute;
  top: 6.5rem;
  color: #f1dd56;
  z-index: 1;
`;

export const MatchVsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
  gap: 4rem;
  top: 13rem;
  img {
    aspect-ratio: 1/ 1;
    width: 8rem;
  }

  h4 {
    color: ${theme.color.primaryYellow};
    font-size: 2rem;
    width: 9.2rem;
    color: #f1dd56;
  }

  h3 {
    color: white;
    font-wheight: 700;
    font-size: 4rem;
  }
`;

export const MathInfo = styled.p`
  position: absolute;
  top: 13rem;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);

  ${theme.matchInfo}

  width: 17.5rem;

  color: white;

  span {
    padding: 5rem;
  }
`;

export const Korpen = styled.span`
  position: absolute;
  bottom: 0;
  font-size: 2.5rem;
  color: white;
  font-family: "Rubik Microbe", cursive;
  padding-bottom: 1rem;
  z-index: 1;
`;

export const CarouselContainer = styled.div`
  display: flex;
  height: 30rem;
  z-index: 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    transition: opacity 1s;
    object-fit: cover;
  }

  img.fade-in {
    opacity: 1;
  }

  .fade-in {
    transition: opacity 1s ease-in-out;
  }
`;

export const CarouselSlide = styled.div`
  flex: none;

  width: 100%;

  scroll-snap-align: start;
`;

export const ImgChanger = styled.img`
  transition: all 0.3s ease;
`;

export const ImageContainer = styled.div`
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: opacity 1s ease-in-out;
  }
`;
