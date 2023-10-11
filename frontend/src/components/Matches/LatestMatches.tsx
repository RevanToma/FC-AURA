import { useState } from "react";
import { LatestMatchesData } from "./LatestMatchesData";
import * as S from "./LatestMatchesStyles";
import HeaderLogo from "../../assets/images/HeaderLogo.svg";
import RenderMatches from "./RenderMatches";
const LatestMatches = () => {
  const [matches, setMatches] = useState(LatestMatchesData);

  return (
    <S.LatestMatchesContainer>
      <header>
        <div>
          <img src={HeaderLogo} alt="Header Logo" />
          <h1>Korpen</h1>
        </div>
        <span>( Senaste Matcher )</span>
      </header>
      {RenderMatches(matches)}
    </S.LatestMatchesContainer>
  );
};

export default LatestMatches;
