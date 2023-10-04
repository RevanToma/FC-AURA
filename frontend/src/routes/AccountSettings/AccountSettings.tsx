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
import { useQuery } from "@apollo/client";
import { CURRENT_USER_QUERY } from "../../Mutations/Mutations";

const AccountSettings = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { data, loading } = useQuery(CURRENT_USER_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  if (loading) return null;
  if (!auth.user) return null;

  return (
    <>
      <GobackNav title="Inställningar" />
      <S.AccountSettingsContainer>
        <Card
          name={data.me.name}
          email={data.me.email}
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
