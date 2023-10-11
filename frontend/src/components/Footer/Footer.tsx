import * as S from "./FooterStyles";
import ArenaBil from "../../assets/images/arenaBil.jpg";
import Instagram from "../../assets/images/instagram.svg";
const Footer = () => {
  return (
    <S.FooterContainer>
      <h4>Missa inte nästa match!</h4>
      <p>
        Registrera dig och få e-mail notifikation när nästa match närmar sig.
        <a href="/signup">Skapa konto</a>
      </p>
      <h4>Glöm inte heller och följa Fc-Aura</h4>
      <a
        href="https://www.instagram.com/fcaura2022/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Instagram} alt="instagram" />
      </a>
      <h4>Sponsor</h4>
      <div className="sponsors">
        <a
          href="https://www.arenabil.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ArenaBil} alt="arena bil" />
        </a>
      </div>
    </S.FooterContainer>
  );
};

export default Footer;
