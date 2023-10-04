import { useQuery } from "@apollo/client";
import { GET_TEAMMEMBERS } from "../../Mutations/Mutations";
import ProfileImg from "../../assets/images/ProfileImg.svg";
import { PiSoccerBallThin } from "react-icons/pi";
import * as S from "./TeamMembersStyles";
import Button from "../../components/common/Button/Button";
import { ButtonType } from "../../components/common/Button/ButtonTypes";
import { Link, Outlet } from "react-router-dom";
type User = {
  name: string;
  bio: string;
  weight: number;
  length: number;
  instagram: string;
  position: string;
  skills: string[];
  teamMember: boolean;
  id: string;
  image: string;
};
const TeamMembers = () => {
  const { data, loading } = useQuery(GET_TEAMMEMBERS);
  const isTeamMember = data?.users?.filter((usr: any) => usr.teamMember) || [];

  console.log(isTeamMember);
  if (loading) return null;
  return (
    <S.TeamMemberContainer>
      {isTeamMember.map((user: User) => {
        return (
          <S.ProfilDiv key={user.id}>
            {user.image ? (
              <img
                src={`${process.env.REACT_APP_IMAGE}${user.image}`}
                alt="profile"
              />
            ) : (
              <PiSoccerBallThin />
            )}
            <h4>{user.name}</h4>
            <S.SkillsContainer>
              {user.skills.map((skill, indx) => {
                return <span key={indx}>{skill}</span>;
              })}
            </S.SkillsContainer>
            <Link to={`/teamMembers/${user.id}`}>
              <Button buttontypes={ButtonType.Skills}>Se Profil</Button>
            </Link>
          </S.ProfilDiv>
        );
      })}
      <Outlet />
    </S.TeamMemberContainer>
  );
};

export default TeamMembers;
