import GobackNav from "../../components/common/GoBackNav/GobackNav";
import * as S from "./AccountSettingsStyles";
import NavigationItem from "./NavigationButtons/NavigationButtons";
import { FaRegEnvelope } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { LuLayoutDashboard, LuWand } from "react-icons/lu";
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
    fetchPolicy: "network-only",
  });

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <GobackNav title="Inställningar" />
      <S.AccountSettingsContainer>
        <Card name={data.me.name} email={data.me.email} image={data.me.image} />
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

        {data.me.role === "admin" && (
          <S.NavigationItems>
            <h4>Dashboard</h4>

            <NavigationItem
              text="Dashboard"
              onClick={() => navigate("dashboard")}
              icon={<LuLayoutDashboard />}
            />
          </S.NavigationItems>
        )}

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
