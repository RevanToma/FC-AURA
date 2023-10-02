import GobackNav from "../../components/common/Navbar/GobackNav";
import * as S from "./AccountSettingsStyles";
import NavigationItem from "./NavigationButtons/NavigationButtons";
import { FaRegEnvelope } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { LuWand } from "react-icons/lu";
import { ButtonType } from "../../components/common/Button/ButtonTypes";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
const AccountSettings = () => {
  const navigate = useNavigate();
  return (
    <>
      <GobackNav title="Inställningar" />
      <S.AccountSettingsContainer>
        <S.NavigationItems>
          <h4>Konto</h4>
          <NavigationItem
            text="Byt Email"
            onClick={() => navigate("changeEmail")}
            icon={<FaRegEnvelope />}
          />
          <NavigationItem
            text="Byt Lösenord"
            onClick={() => navigate("changePassword")}
            icon={<RiLockPasswordLine />}
          />
        </S.NavigationItems>

        <S.NavigationItems>
          <h4>Profil</h4>
          <NavigationItem
            text="Ändra profil info"
            onClick={() => navigate("changeProfileInfo")}
            icon={<ImProfile />}
          />
          <NavigationItem
            text="Färdigheter"
            onClick={() => navigate("ChangeSkills")}
            icon={<LuWand />}
          />
        </S.NavigationItems>

        <Button buttontypes={ButtonType.SignOut} className="signOut">
          Logga ut
        </Button>
      </S.AccountSettingsContainer>
    </>
  );
};

export default AccountSettings;
