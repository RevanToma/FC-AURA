import { useState } from "react";
import ChangeProfileInfo from "../../AccountSettings/ChangeProfileInfo/ChangeProfileInfo";
import ChangeSkills from "../../AccountSettings/ChangeSkills/ChangeSkills";
import { useNavigate } from "react-router-dom";
import SetUpProfile from "./SetUpProfile/SetUpProfile";
import SetUpSkills from "./SetUpProfile/SetUpSkills";
import GobackNav from "../../../components/common/GoBackNav/GobackNav";

const SetUp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      {currentStep === 0 ? (
        <SetUpProfile setCurrentStep={setCurrentStep} />
      ) : (
        <>
          <GobackNav title="Skapa profil" goBack={true} />
          <SetUpSkills />
        </>
      )}
    </div>
  );
};
export default SetUp;
