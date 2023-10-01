import Image1 from "../../../assets/images/TeamImage.jpg";
import FCAURALogo from "../../../assets/images/FCAURA-Logo.png";
import * as S from "./ImageCarousel.Styles";
// { images }: { images: string[] }
const ImageCarousel = () => {
  return (
    <S.ImageCarouselContainer>
      <h1>MATCHDAY</h1>
      <S.Span>8</S.Span>
      <img src={Image1} alt="image1" />
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

export default ImageCarousel;
