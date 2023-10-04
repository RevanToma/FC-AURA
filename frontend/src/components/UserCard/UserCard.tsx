import { FC } from "react";
import * as S from "./UserCardStyles";
import FCAURALOGO from "../../assets/images/FCAURA-Logo.png";
import instagram from "../../assets/images/instagram.svg";
import { GiWeight } from "react-icons/gi";
import Tall from "../../assets/images/Tall.svg";
import ProfileImg from "../../assets/images/ProfileImg.svg";
import { PiSoccerBallThin } from "react-icons/pi";
type UserCardProps = {
  user: {
    name: string;
    bio: string;
    weight: number;
    length: number;
    instagram: string;
    position: string;
    skills: string[];
    image: string;
  };
};

const UserCard: FC<UserCardProps> = ({ user }) => {
  const capitalizeFirstLetter = (str: string) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  };
  console.log(user);
  return (
    <S.UserCardDiv>
      <S.UserCardContainer>
        <img src={FCAURALOGO} alt="fc aura logo" />
        {user.image ? (
          <S.Userimg
            src={`${process.env.REACT_APP_IMAGE}${user.image}`}
            alt="profile"
            className="userimg"
          />
        ) : (
          <PiSoccerBallThin color="white" />
        )}
        <S.UserHeader>
          <h4>{capitalizeFirstLetter(user.name)}</h4>
          <h6>{capitalizeFirstLetter(user.position)}</h6>
          <p>{user.bio}</p>
        </S.UserHeader>

        <div>
          <S.UserProp>
            <GiWeight color="black" size={30} />
            <p>{user.weight}kg</p>
            <img src={Tall} alt="tall " />
            <p>{user.length}cm</p>

            <a
              href={`https://www.instagram.com/${user.instagram}/`}
              rel="noreferrer"
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </S.UserProp>

          <ul>
            {user.skills.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
        </div>
      </S.UserCardContainer>
    </S.UserCardDiv>
  );
};

export default UserCard;
