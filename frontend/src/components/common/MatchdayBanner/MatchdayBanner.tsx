import FCAURALogo from "../../../assets/images/FCAURA-Logo.png";

import * as S from "./MatchdayBannerStyles";
import ImageChanger from "./ImageChanger";

import { CarouselImageData } from "./ImageData";

const MatchdayBanner = () => {
  return (
    <S.ImageCarouselContainer>
      <ImageChanger images={CarouselImageData} duration={4000} />

      <h1>MATCHDAY</h1>
      <S.Span>8</S.Span>
      <S.MatchVsContainer>
        <h4>Stockholm United FC</h4>
        <h3>VS</h3>
        <img src={FCAURALogo} alt="fc aura logo" />
        <S.MathInfo>
          SÖNDAG 20 AUGUSTI <span>20:00</span> SANDÅKRA BP
        </S.MathInfo>
      </S.MatchVsContainer>
      <S.Korpen>KORPEN</S.Korpen>
    </S.ImageCarouselContainer>
  );
};

export default MatchdayBanner;
