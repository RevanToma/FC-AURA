import { useQuery } from "@apollo/client";
import { GET_TEAMMEMBERS } from "../../Mutations/Mutations";
import { PiSoccerBallThin } from "react-icons/pi";
import * as S from "./TeamMembersStyles";
import Button from "../../components/common/Button/Button";
import { ButtonType } from "../../components/common/Button/ButtonTypes";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { TTeamMembers } from "../../types/types";

const TeamMembers = () => {
  const { data, loading, fetchMore } = useQuery(GET_TEAMMEMBERS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });
  const [hasMoreData, setHasMoreData] = useState(true);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading &&
      hasMoreData
    ) {
      fetchMore({
        variables: {
          offset: data?.users?.length,
          limit: 10,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          // Filter out duplicates based on ID
          const newUsers = fetchMoreResult.users.filter(
            (newUser: TTeamMembers) =>
              !prev.users.some(
                (prevUser: TTeamMembers) => prevUser.id === newUser.id
              )
          );

          if (newUsers.length < 11) {
            setHasMoreData(false);
          } else {
            setHasMoreData(true);
          }

          return {
            ...prev,
            users: [...prev.users, ...newUsers],
          };
        },
      });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data, loading]);
  const isTeamMember =
    data?.users
      ?.filter((usr: any) => usr.teamMember)
      .filter((user: any) => user.registrationStatus === "Accepted") || [];

  if (loading) return null;

  return (
    <S.TeamMemberContainer>
      {isTeamMember.length <= 0 ? (
        <h2>Inga lagmedlemmar Registrerade just nu</h2>
      ) : (
        isTeamMember.map((user: TTeamMembers) => {
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
        })
      )}

      {!hasMoreData && <h6>Du har nått slutet av listan!</h6>}

      <Outlet />
    </S.TeamMemberContainer>
  );
};

export default TeamMembers;
