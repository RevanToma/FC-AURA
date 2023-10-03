import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../Mutations/Mutations";
import UserCard from "../../../components/UserCard/UserCard";
import { useParams } from "react-router-dom";

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
};

const Member = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_USER, {
    variables: { getUserId: id },
  });

  console.log(data);
  if (loading) return <p>Loading...</p>;

  // const isTeamMember = data?.users?.filter((usr: any) => usr.teamMember) || [];

  return (
    <div>
      <UserCard user={data.getUser} />;
    </div>
  );
};

export default Member;
