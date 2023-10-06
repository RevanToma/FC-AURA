import { useQuery } from "@apollo/client";

import { useAuth } from "../../../../context/auth/auth";
import { GET_USER } from "../../../../Mutations/Mutations";
import UserCard from "../../../../components/UserCard/UserCard";

import GobackNav from "../../../../components/common/GoBackNav/GobackNav";
import {
  PreviewContainer,
  PreviewH2,
  SetUpProfileNav,
} from "./SetUpProfileStyles";
import Button from "../../../../components/common/Button/Button";
import { ButtonType } from "../../../../components/common/Button/ButtonTypes";
import { useNavigate } from "react-router-dom";

const SetupPreview = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const { data, loading } = useQuery(GET_USER, {
    variables: { getUserId: auth.user?.id },
  });

  const handleCreateProfile = () => {
    if (data.getUser.teamMember) {
      navigate("/member-review");
    }
  };
  if (loading) return null;

  return (
    <>
      <GobackNav title="Skapa profil" goBack={true} />
      <PreviewContainer>
        <SetUpProfileNav>
          <PreviewH2>Såhär kommer andra se din profil</PreviewH2>
        </SetUpProfileNav>
        <UserCard user={data.getUser} />;
        <Button buttontypes={ButtonType.SignIn} onClick={handleCreateProfile}>
          Skapa profil
        </Button>
        <Button
          buttontypes={ButtonType.AddSkill}
          onClick={() => window.history.back()}
        >
          Ändra
        </Button>
      </PreviewContainer>
    </>
  );
};

export default SetupPreview;
