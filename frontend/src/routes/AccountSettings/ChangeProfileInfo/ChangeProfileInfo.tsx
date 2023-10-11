import GobackNav from "../../../components/common/GoBackNav/GobackNav";
import ChangePorfileInfoImg from "../../../assets/images/ChangePorfileInfoImg.svg";
import { ChangeEmailContainer } from "../ChangeEmail/ChangeEmailStyles";

import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CHANGE_PROFILE_INFO,
  GET_PROFILE_INFO,
} from "../../../Mutations/Mutations";
import Upload from "../../../components/common/Upload/Upload";
import useUploadFile from "../../../hooks/useUploadFile";
import { useAuth } from "../../../context/auth/auth";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import VortexSpinner from "../../../components/common/Vortex/Vortex";
import * as S from "../ChangeEmail/ChangeEmailStyles";
import { UpdateUserInput } from "../../../types/types";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import { ButtonType } from "../../../components/common/Button/ButtonTypes";
import { BiCheckCircle } from "react-icons/bi";

const ChangeProfileInfo = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,

    formState: { errors, touchedFields },
  } = useForm({ mode: "onBlur" });
  // In ChangeProfileInfo
  const [file, setFile] = useState<string>("");

  const navigate = useNavigate();
  const [changeProfileInfo, { error, loading }] =
    useMutation(CHANGE_PROFILE_INFO);

  const { data: userProfileData } = useQuery(GET_PROFILE_INFO);
  const uploadFile = useUploadFile();

  useEffect(() => {
    if (userProfileData) {
      const { me } = userProfileData;
      setValue("bio", me.bio || "");
      setValue("weight", me.weight || "");
      setValue("length", me.length || "");
      setValue("instagram", me.instagram || "");
      setValue("position", me.position || "");
    }
  }, [userProfileData, setValue]);

  const onSubmit = async () => {
    const formData = getValues();

    try {
      const input: UpdateUserInput = {};

      const keys = [
        "bio",
        "weight",
        "length",
        "instagram",
        "position",
      ] as const;

      keys.forEach((key) => {
        const value = formData[key];
        if (value !== undefined) {
          if (key === "weight" || key === "length") {
            (input[key] as any) = parseFloat(value as string);
          } else {
            (input[key] as any) = value;
          }
        }
      });
      if (file) {
        await uploadFile(file);
      }

      const response = await changeProfileInfo({
        variables: {
          input,
        },
      });

      // handle response
      if (response.data) {
        navigate("/account");
        toast.success(`Profil info ändrad`);
      }
    } catch (error: ApolloError | any) {
      console.error("There was an error creating the user:", error);
    }
  };

  if (loading) return <VortexSpinner />;
  return (
    <>
      <GobackNav title="Ändra profil info" />
      <div>
        <ChangeEmailContainer>
          <img src={ChangePorfileInfoImg} alt="change profile" />
          <Upload setFile={setFile} file={file} />

          <S.ChangeEmailForm onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
              Din Bio
              {touchedFields.bio && !errors.bio && (
                <S.TouchedSvg>
                  <BiCheckCircle color="green" size={30} />
                </S.TouchedSvg>
              )}
            </S.Label>
            {errors.bio && <span>Måste innehålla minst 10 tecken.</span>}
            <Input
              type="textarea"
              {...register("bio", { required: true, minLength: 10 })}
              placeholder="Din Bio"
            />

            <S.Label>Din vikt</S.Label>
            {errors.weight && <span>something</span>}
            <Input
              type="number"
              {...register("weight")}
              placeholder="Din vikt i kg"
            />

            <S.Label>Din Längd</S.Label>
            {errors.length && (
              <span>Kontrollera din längd. Det verkar lite högt!</span>
            )}
            <Input
              type="number"
              {...register("length", { max: 210 })}
              placeholder="Din Längd i cm"
            />

            <S.Label>Din Instagram</S.Label>
            {errors.instagram && <span>something</span>}
            <Input {...register("instagram")} placeholder="Din Instagram" />

            <S.Label>Din Position</S.Label>
            {errors.position && <span>something</span>}
            <Input {...register("position")} placeholder="Din Position" />

            <Button buttontypes={ButtonType.SignIn} type="submit">
              Spara
            </Button>
          </S.ChangeEmailForm>
        </ChangeEmailContainer>
      </div>
    </>
  );
};

export default ChangeProfileInfo;
