import UserCard from "../../../../components/UserCard/UserCard";

import GobackNav from "../../../../components/common/GoBackNav/GobackNav";
import {
  PreviewContainer,
  PreviewH2,
  SetUpProfileNav,
} from "./SetUpProfileStyles";
import Button from "../../../../components/common/Button/Button";
import { ButtonType } from "../../../../components/common/Button/ButtonTypes";
import useHandleCreateProfile from "../../../../hooks/useHandleCreateProfile";

const SetupPreview = () => {
  const { loading, handleCreateProfile, userData } = useHandleCreateProfile();
  if (loading) return null;

  return (
    <>
      <GobackNav title="Skapa profil" goBack={true} />
      <PreviewContainer>
        <SetUpProfileNav>
          <PreviewH2>Såhär kommer andra se din profil</PreviewH2>
        </SetUpProfileNav>
        <UserCard user={userData.getUser} />;
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
