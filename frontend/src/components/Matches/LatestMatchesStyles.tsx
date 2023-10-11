import styled from "styled-components";
import { theme } from "../../theme/Theme";
interface LatestMatchesSectionProps {
  index: number;
}
export const LatestMatchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1rem;
  align-items: center;

  padding: 2rem;

  span {
    color: #808080;
    font-family: Sofia Sans;
    font-weight: bold;
    font-size: 1.3rem;
  }
  header {
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 80rem;
    border-radius: 1rem 1rem 0 0;
    padding: 1rem;

    div {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    img {
      aspect-ratio: 1/1;
      height: 4rem;
    }
  }
  h1 {
    color: white;
    font-size: 1.8rem;
  }
`;

export const LatestMatchesSection = styled.section`
  box-shadow: ${theme.primaryShadow};
  background-color: #2c2c2c;
  width: 100%;
  max-width: 80rem;
  p {
    color: white;
    width: 4rem;
  }
`;

export const RenderMatchDiv = styled.div<LatestMatchesSectionProps>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  align-items: center;
  gap: 1rem;
  background-color: ${({ index }) => (index % 2 === 0 ? "#2c2c2c" : "#222222")};
  padding: 1rem;

  .match-date {
    width: 5rem;
  }
  span {
    color: white;
    font-family: Sofia Sans;
    font-weight: bold;
    font-size: 1.3rem;
    width: 10rem;
  }
  img {
    aspect-ratio: 1/1;
    height: 3rem;
  }
`;
