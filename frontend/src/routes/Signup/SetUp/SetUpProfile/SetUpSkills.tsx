import { RiDeleteBack2Line } from "react-icons/ri";
import Button from "../../../../components/common/Button/Button";
import { ButtonType } from "../../../../components/common/Button/ButtonTypes";
import GobackNav from "../../../../components/common/GoBackNav/GobackNav";
import useUserSkills from "../../../../hooks/useUserSkills";
import { SkillsContainer } from "../../../TeamMembers/TeamMembersStyles";
import Input from "../../../../components/common/Input/Input";
import { useRef, useState } from "react";
import {
  ChangeSkillsContainer,
  SelectDiv,
} from "../../../AccountSettings/ChangeSkills/ChangeSkillStyles";
import { preDefinedSkills } from "../../../../components/helpers/capitalizeFirstLetter";
import { ADD_SKILLS } from "../../../../Mutations/Mutations";
import { ApolloError, useMutation } from "@apollo/client";
import { SetUpProfileContainer } from "./SetUpProfileStyles";
import { useNavigate } from "react-router-dom";
import AddSkillsImg from "../../../../assets/images/ChangeSkillsImg.svg";

const SetUpSkills = () => {
  const { selectedSkills, setSelectedSkills } = useUserSkills();
  const [inputSkill, setInputSkill] = useState<string>("");
  const selectRef = useRef<HTMLSelectElement>(null);
  const [addSkills] = useMutation(ADD_SKILLS);
  const navigate = useNavigate();

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill) && skill.trim() !== "") {
      setSelectedSkills([
        ...selectedSkills,
        skill.charAt(0).toUpperCase() + skill.slice(1),
      ]);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await addSkills({
        variables: {
          input: {
            skills: selectedSkills,
          },
        },
      });

      // handle response
      if (response.data) {
        navigate("/preview");
      }
    } catch (error: ApolloError | any) {
      console.error("There was an error creating the user:", error);
    }
  };
  return (
    <>
      <GobackNav title="Skapa profil" goBack={true} />

      <SetUpProfileContainer>
        <img src={AddSkillsImg} alt="add skills" />
        <SkillsContainer>
          {selectedSkills.map((skill, indx) => (
            <Button
              buttontypes={ButtonType.Skills}
              key={indx}
              className="skillsBtn"
            >
              {skill}
              <RiDeleteBack2Line
                onClick={() => removeSkill(skill)}
                color="#F1D202"
                size={20}
              />
            </Button>
          ))}
        </SkillsContainer>
        <ChangeSkillsContainer>
          <Input
            value={inputSkill}
            onChange={(e) => setInputSkill(e.target.value)}
            placeholder="Lägg till en egen Färdighet"
          />
          <SelectDiv>
            <select
              ref={selectRef}
              onChange={(e) => {
                addSkill(e.target.value);
                e.target.value = "";
              }}
            >
              <option value="">Välj en färdighet</option>
              {preDefinedSkills.map((skill, indx) => (
                <option key={indx} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </SelectDiv>

          <Button
            buttontypes={ButtonType.AddSkill}
            onClick={() => {
              addSkill(inputSkill);
              setInputSkill("");
            }}
            className="createLater"
          >
            Lägg till en egen Färdighet
          </Button>
          <Button buttontypes={ButtonType.SignIn} onClick={handleSubmit}>
            Förhandsgranska
          </Button>
        </ChangeSkillsContainer>
      </SetUpProfileContainer>
    </>
  );
};

export default SetUpSkills;
