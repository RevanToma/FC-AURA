import GobackNav from "../../components/common/GoBackNav/GobackNav";
import * as S from "./AccountSettingsStyles";
import NavigationItem from "./NavigationButtons/NavigationButtons";
import { FaRegEnvelope } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { LuWand } from "react-icons/lu";
import { ButtonType } from "../../components/common/Button/ButtonTypes";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/auth";
import Card from "../../components/common/Card/Card";
const AccountSettings = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  console.log(auth.user?.name);
  console.log(auth.user?.email);
  console.log(auth.user?.image);
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  if (!auth.user) return null;

  return (
    <>
      <GobackNav title="Inställningar" />
      <S.AccountSettingsContainer>
        <Card
          name={auth.user.name}
          email={auth.user.email}
          image={auth.user.image}
        />
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
            onClick={() => navigate("ChangeProfileInfo")}
            icon={<ImProfile />}
          />
          <NavigationItem
            text="Färdigheter"
            onClick={() => navigate("ChangeSkills")}
            icon={<LuWand />}
          />
        </S.NavigationItems>

        <Button
          buttontypes={ButtonType.SignOut}
          className="signOut"
          onClick={handleLogout}
        >
          Logga ut
        </Button>
      </S.AccountSettingsContainer>
    </>
  );
};

export default AccountSettings;
