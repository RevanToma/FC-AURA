import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/images/FCAURA-Logo.png";
import Button from "../../../../components/common/Button/Button";
import { ButtonType } from "../../../../components/common/Button/ButtonTypes";
import VortexSpinner from "../../../../components/common/Vortex/Vortex";
import * as S from "./MemberReviewStyles";
const MemberReview = () => {
  const navigate = useNavigate();
  return (
    <S.ReviewContainer>
      <img src={Logo} alt="Logo" />
      <VortexSpinner />

      <S.ReviewParagraphDiv>
        <p>
          Tack för din registrering! Eftersom du valde att registrera dig som en
          lagmedlem, kommer din ansökan nu att granskas av en administratör. Vi
          uppskattar ditt tålamod och kommer att meddela dig så snart din
          registrering har godkänts.
        </p>
        <p>
          Under tiden du väntar kan du utforska sidan, bekanta dig med våra
          lagmedlemmar och ta en titt på kommande matcher.
        </p>
      </S.ReviewParagraphDiv>
      <Button buttontypes={ButtonType.SignIn} onClick={() => navigate("/")}>
        Utforska Sidan
      </Button>
    </S.ReviewContainer>
  );
};

export default MemberReview;
