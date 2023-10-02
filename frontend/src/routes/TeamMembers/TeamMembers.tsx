import { useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { GET_TEAMMEMBERS } from "../../Mutations/Mutations";
import { useQuery } from "@apollo/client";

type User = {
  name: string;
  bio: string;
  weight: number;
  length: number;
  instagram: string;
  position: string;
  skills: string[];
  teamMember: boolean;
};

const TeamMembers = () => {
  const { data, loading } = useQuery(GET_TEAMMEMBERS);

  const isTeamMember = data?.users?.filter((usr: any) => usr.teamMember) || [];
  console.log(isTeamMember);
  return (
    <div>
      {isTeamMember.map((user: User, indx: number) => {
        return <UserCard key={indx} user={user} />;
      })}
    </div>
  );
};

export default TeamMembers;
