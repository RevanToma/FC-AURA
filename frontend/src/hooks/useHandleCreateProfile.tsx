import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_USER, SETUP_COMPLETED } from "../Mutations/Mutations";
import { useAuth } from "../context/auth/auth";

const useHandleCreateProfile = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const { data, loading } = useQuery(GET_USER, {
    variables: { getUserId: auth.user?.id },
  });

  const [setupCompleted] = useMutation(SETUP_COMPLETED);

  const handleCreateProfile = async () => {
    try {
      await setupCompleted({
        variables: {
          input: {
            id: auth.user?.id,
            setupCompleted: true,
          },
        },
      });

      if (data.getUser.teamMember) {
        navigate("/member-review");
        localStorage.removeItem("setUpProfileData");
      } else {
        navigate("/");
      }
    } catch (error: ApolloError | any) {
      console.log(ApolloError);
    }
  };

  return {
    handleCreateProfile,
    userData: data,
    loading,
  };
};

export default useHandleCreateProfile;
