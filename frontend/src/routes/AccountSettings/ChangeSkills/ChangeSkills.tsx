import ChangeSkillsImg from "../../../assets/images/ChangeSkillsImg.svg";
import Input from "../../../components/common/Input/Input";
import * as S from "./ChangeSkillStyles";
import GobackNav from "../../../components/common/GoBackNav/GobackNav";
import { ChangeEmailContainer } from "../ChangeEmail/ChangeEmailStyles";
import { useRef, useState } from "react";
import Button from "../../../components/common/Button/Button";
import { ButtonType } from "../../../components/common/Button/ButtonTypes";
import { RiDeleteBack2Line } from "react-icons/ri";
import { ApolloError, gql, useMutation } from "@apollo/client";
import useUserSkills from "../../../hooks/useUserSkills";
import { ADD_SKILLS } from "../../../Mutations/Mutations";
import { useNavigate } from "react-router-dom";

const ChangeSkills = () => {
  const [inputSkill, setInputSkill] = useState<string>("");
  const selectRef = useRef<HTMLSelectElement>(null);
  const [addSkills] = useMutation(ADD_SKILLS);
  const { selectedSkills, setSelectedSkills } = useUserSkills();

  const navigate = useNavigate();

  const preDefinedSkills: string[] = [
    "Dribbling", // Dribbling remains similar in many languages
    "Passning", // Passing
    "Skott", // Shooting
    "Skallning", // Tackling
    "Bollkontroll", // Ball Control
    "Inlägg", // Crossing
    "Nickning", // Heading
    "Frisparkar", // Free Kicks
    "Straffar", // Penalties
    "Uppfattning", // Vision
    "Fart", // Pace
    "Uthållighet", // Endurance
    "Styrka", // Strength
    "Taktisk Medvetenhet", // Tactical Awareness
    "Positionering", // Positioning
    "Arbetskapacitet", // Work Rate
    "Lagspel", // Teamwork
    "Rörelse utan boll", // Off-the-ball Movement
    "Press", // Pressing
    "Beslutsfattande", // Decision Making
  ];

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill) && skill.trim() !== "") {
      setSelectedSkills([
        ...selectedSkills,
        skill.charAt(0).toUpperCase() + skill.slice(1),
      ]);
    }
    if (selectRef.current) {
      selectRef.current.blur();
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
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
        navigate("/account");
      }
    } catch (error: ApolloError | any) {
      console.error("There was an error creating the user:", error);
    }
  };

  return (
    <>
      <GobackNav title="Lägg till/ta bort färdigheter" />
      <div>
        <ChangeEmailContainer>
          <img src={ChangeSkillsImg} alt="change skills" />
          <S.SkillsContainer>
            {selectedSkills.map((skill, indx) => (
              <Button buttontypes={ButtonType.Skills} key={indx}>
                {skill}
                <RiDeleteBack2Line
                  onClick={() => removeSkill(skill)}
                  color="#F1D202"
                  size={20}
                />
              </Button>
            ))}
          </S.SkillsContainer>
          <S.ChangeSkillsContainer>
            <Input
              value={inputSkill}
              onChange={(e) => setInputSkill(e.target.value)}
              placeholder="Lägg till en egen Färdighet"
            />

            <S.SelectDiv>
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
            </S.SelectDiv>
            <Button
              buttontypes={ButtonType.AddSkill}
              onClick={() => {
                addSkill(inputSkill);
                setInputSkill("");
              }}
            >
              Lägg till en egen Färdighet
            </Button>
            <Button buttontypes={ButtonType.SignIn} onClick={handleSubmit}>
              Spara
            </Button>
          </S.ChangeSkillsContainer>
        </ChangeEmailContainer>
      </div>
    </>
  );
};

export default ChangeSkills;
