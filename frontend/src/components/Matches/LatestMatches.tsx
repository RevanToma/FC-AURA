import { useState } from "react";
import { LatestMatchesData } from "./LatestMatchesData";
import * as S from "./LatestMatchesStyles";
import HeaderLogo from "../../assets/images/HeaderLogo.svg";
import RenderMatches from "./RenderMatches";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { register } from "swiper/element/bundle";
register();
const LatestMatches = () => {
  const [matches, setMatches] = useState(LatestMatchesData);
  const [currentPage, setCurrentPage] = useState(1);
  const matchesPerPage = 5;

  const lastMatchIndex = currentPage * matchesPerPage;
  const firstMatchIndex = lastMatchIndex - matchesPerPage;
  const currentMatches = matches.slice(firstMatchIndex, lastMatchIndex);

  const nextPage = () => {
    setCurrentPage((prevPageNumber) => prevPageNumber + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPageNumber) => prevPageNumber - 1);
  };

  return (
    <S.LatestMatchesContainer>
      <header>
        <div>
          <img src={HeaderLogo} alt="Header Logo" />
          <h1>Korpen</h1>
        </div>
        <span>( Senaste Matcherna )</span>
      </header>
      {RenderMatches(currentMatches)}
      <S.PaginationDiv>
        <span>
          {currentPage > 1 && (
            <BiChevronLeft onClick={prevPage} size={40} color="#F1D202">
              Previous
            </BiChevronLeft>
          )}
        </span>
        {matches.length > lastMatchIndex && (
          <span className="rightChevrone">
            <BiChevronRight onClick={nextPage} size={40} color="#F1D202">
              Next
            </BiChevronRight>
          </span>
        )}
      </S.PaginationDiv>
    </S.LatestMatchesContainer>
  );
};

export default LatestMatches;
