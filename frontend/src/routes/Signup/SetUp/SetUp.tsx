import { useState } from "react";

import SetUpProfile from "./SetUpProfile/SetUpProfile";
import SetUpSkills from "./SetUpProfile/SetUpSkills";
import GobackNav from "../../../components/common/GoBackNav/GobackNav";

const SetUp = () => {
  const [currentStep, setCurrentStep] = useState(0);
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
