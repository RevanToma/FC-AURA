import { FC } from "react";
import * as S from "./CardStyles";
import { PiSoccerBallThin } from "react-icons/pi";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";
type CardProps = {
  name: string;
  email: string;
  image: string;
};

const Card: FC<CardProps> = ({ name, email, image }: CardProps) => {
  //   `${process.env.REACT_APP_IMAGE}${image}`;
  return (
    <S.CardContainer>
      {image ? (
        <img src={`${process.env.REACT_APP_IMAGE}${image}`} alt="profile" />
      ) : (
        <PiSoccerBallThin />
      )}

      <div>
        <span>{email}</span>
        <span>{capitalizeFirstLetter(name)}</span>
      </div>
      <PiSoccerBallThin color="white" size={50} />
    </S.CardContainer>
  );
};

export default Card;
