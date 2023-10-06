import { useForm } from "react-hook-form";
import Input from "../../../../components/common/Input/Input";
import { InputType } from "./../../../../types/types";
import {
  Form,
  Label,
} from "../../../../components/common/Form/ReusableFormStyles";
import Upload from "../../../../components/common/Upload/Upload";
import * as S from "./SetUpProfileStyles";
import { FC, useEffect, useState } from "react";
import useUploadFile from "../../../../hooks/useUploadFile";
import { ButtonType } from "../../../../components/common/Button/ButtonTypes";
import Button from "../../../../components/common/Button/Button";

import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CHANGE_PROFILE_INFO } from "../../../../Mutations/Mutations";
import GobackNav from "../../../../components/common/GoBackNav/GobackNav";
interface SetUpProfileProps {
  setCurrentStep: (step: number) => void;
}

const SetUpProfile: FC<SetUpProfileProps> = () => {
  const uploadFile = useUploadFile();
  const navigate = useNavigate();
  const [changeProfileInfo, { error, loading }] =
    useMutation(CHANGE_PROFILE_INFO);
  const [file, setFile] = useState<string>("");

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const handleNavigationClick = async () => {
    try {
      // 1. Gather form data using getValues
      const formData = getValues();
      localStorage.setItem("setUpProfileData", JSON.stringify(formData));

      // 2. Prepare the input payload
      const input = {
        bio: formData.bio || null,
        weight: formData.weight ? parseFloat(formData.weight) : null,
        length: formData.length ? parseFloat(formData.length) : null,
        position: formData.position || null,
        instagram: formData.instagram || null,
      };

      // 3. Upload file if it exists
      if (file) {
        await uploadFile(file);
      }

      // 4. Run the mutation
      await changeProfileInfo({ variables: { input } });

      // 5. Navigate the user to the next step
      navigate("/setup-skills");
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem("setUpProfileData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      // Use setValue from react-hook-form to populate fields
      setValue("bio", parsedData.bio);
      setValue("weight", parsedData.weight);
      setValue("length", parsedData.length);
      setValue("position", parsedData.position);
      setValue("instagram", parsedData.instagram);
    }
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <S.SetUpProfileNav>
        <GobackNav title="Skapa profil" />;
      </S.SetUpProfileNav>
      <S.SetUpProfileContainer>
        <Upload setFile={setFile} file={file} />
        <S.SetUpProfileForm onSubmit={handleSubmit(handleNavigationClick)}>
          <div>
            <Label htmlFor={InputType.bio}>Din bio</Label>
            {errors.bio && <p>{errors.bio.message as string}</p>}
            <Input
              type={InputType.textarea}
              placeholder="Din Bio"
              {...register("bio", {
                required: "Fyll i minst 10 tecken",
                minLength: {
                  value: 10,
                  message: "Bio ska vara minst 10 tecken långt",
                },
              })}
            />
          </div>
          <div>
            <Label htmlFor={InputType.weight}>Din Vikt</Label>
            {errors.weight && <p>{errors.weight.message as string}</p>}

            <Input
              type="number"
              placeholder="Din Vikt i kg"
              {...register("weight", {
                required: "Fyll i din vikt",
                pattern: {
                  value: /^[0-9]+(\.[0-9]{1,2})?$/,
                  message: "Ange endast siffror",
                },
              })}
            />
          </div>
          <div>
            <Label htmlFor={InputType.length}>Din Längd</Label>
            {errors.length && <p>{errors.length.message as string}</p>}

            <Input
              type="number"
              placeholder="Din Längd i cm"
              {...register("length", {
                required: "Fyll i din längd",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Ange endast siffror",
                },
              })}
            />
          </div>
          <div>
            <Label htmlFor={InputType.position}>Din Position</Label>
            {errors.position && <p>{errors.position.message as string}</p>}

            <Input
              type={InputType.text}
              placeholder="Din Position"
              {...register("position", {
                required: "Fyll i din position",
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Ange endast text",
                },
              })}
            />
          </div>
          <div>
            <Label htmlFor={InputType.instagram}>Din Instagram</Label>
            {errors.instagram && <p>{errors.instagram.message as string}</p>}

            <Input
              type={InputType.text}
              placeholder="Din Instagram"
              {...register("instagram")}
            />
          </div>
          <Button type="submit" buttontypes={ButtonType.SignIn}>
            Gå till steg 2
            <BsArrowRight size={30} />
          </Button>
        </S.SetUpProfileForm>
      </S.SetUpProfileContainer>
    </>
  );
};

export default SetUpProfile;
