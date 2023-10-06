import styled from "styled-components";

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  svg {
    width: 22rem;
    height: 22rem;
  }

  img {
    aspect-ratio: 1/1;
    width: 17rem;
  }

  button {
    margin-top: 1rem;
  }
`;

export const ReviewParagraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    color: white;
    font-size: 1.7rem;
    font-family: Poppins;
    font-weight: 500;
    letter-spacing: 0.4px;
    line-height: 2.5rem;
  }
`;
