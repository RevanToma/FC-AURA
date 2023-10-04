import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../Mutations/Mutations";
import UserCard from "../../../components/UserCard/UserCard";
import { useParams } from "react-router-dom";

const Member = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_USER, {
    variables: { getUserId: id },
    fetchPolicy: "cache-and-network",
  });
  if (loading) return null;

  return <UserCard user={data.getUser} />;
};

export default Member;
