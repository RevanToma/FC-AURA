import GobackNav from "../../../components/common/GoBackNav/GobackNav";
import ChangePorfileInfoImg from "../../../assets/images/ChangePorfileInfoImg.svg";
import { ChangeEmailContainer } from "../ChangeEmail/ChangeEmailStyles";
import ReusableForm from "../../../components/common/Form/ReusableForm";
import { InputType, UpdateUserInput } from "../../../types/types";
import { useForm } from "../../../hooks/useForm";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CHANGE_PROFILE_INFO,
  GET_PROFILE_INFO,
} from "../../../Mutations/Mutations";
import Upload from "../../../components/common/Upload/Upload";
import useUploadFile from "../../../hooks/useUploadFile";

const ChangeProfileInfo = () => {
  const { formData, setFormData, fieldValidity, setFieldValidity } = useForm([
    "bio",
    "weight",
    "length",
    "instagram",
    "position",
  ]);
  // In ChangeProfileInfo
  const [file, setFile] = useState<string>("");

  const navigate = useNavigate();
  const [changeProfileInfo, { error, loading }] =
    useMutation(CHANGE_PROFILE_INFO);

  const {
    data: userProfileData,

    refetch,
  } = useQuery(GET_PROFILE_INFO, { fetchPolicy: "cache-and-network" });
  const uploadFile = useUploadFile();

  useEffect(() => {
    if (userProfileData) {
      setFormData({
        bio: userProfileData.me.bio || "",
        weight: userProfileData.me.weight || "",
        length: userProfileData.me.length || "",
        instagram: userProfileData.me.instagram || "",
        position: userProfileData.me.position || "",
      });
    }
    refetch();
    console.log(userProfileData);
  }, [userProfileData]);

  const handleSubmit = async (formData: Record<string, string | boolean>) => {
    try {
      const input: UpdateUserInput = {};

      if (
        formData.bio !== undefined &&
        formData.bio !== null &&
        formData.bio !== ""
      ) {
        input.bio = formData.bio as string;
      }

      if (
        formData.weight !== undefined &&
        formData.weight !== null &&
        formData.weight !== ""
      ) {
        input.weight = parseFloat(formData.weight as string);
      }

      if (
        formData.length !== undefined &&
        formData.length !== null &&
        formData.length !== ""
      ) {
        input.length = parseFloat(formData.length as string);
      }

      if (
        formData.instagram !== undefined &&
        formData.instagram !== null &&
        formData.instagram !== ""
      ) {
        input.instagram = formData.instagram as string;
      }
      if (
        formData.position !== undefined &&
        formData.position !== null &&
        formData.position !== ""
      ) {
        input.position = formData.position as string;
      }
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
        window.location.reload();
      }
    } catch (error: ApolloError | any) {
      console.error("There was an error creating the user:", error);
    }
  };

  if (loading) return null;
  return (
    <>
      <GobackNav title="Ändra profil info" />
      <div>
        <ChangeEmailContainer>
          <img src={ChangePorfileInfoImg} alt="change profile" />
          <Upload setFile={setFile} file={file} />

          <ReusableForm
            fields={[
              {
                label: "Din Bio",
                type: InputType.textarea,
                name: InputType.bio,
                placeholder: "Din Bio",
                value: formData.bio,
              },

              {
                label: "Din vikt",
                type: InputType.number,
                name: InputType.weight,
                placeholder: "Din vikt i kg",
                value: formData.weight,
              },

              {
                label: "Din Längd",
                type: InputType.number,
                name: InputType.length,
                placeholder: "Din Längd i cm",
                value: formData.length,
              },
              {
                label: "Din Instagram",
                type: InputType.text,
                name: InputType.instagram,
                placeholder: "Din Instagram",
                value: formData.instagram,
              },
              {
                label: "Din Position",
                type: InputType.text,
                name: InputType.position,
                placeholder: "Din Position",
                value: formData.position,
              },
              {
                type: InputType.text,
                name: InputType.position,
                placeholder: "Din Position",
                value: formData.position,
              },
            ]}
            formData={formData}
            onFormDataChange={setFormData}
            propFieldValidity={fieldValidity}
            onFieldValidityChange={setFieldValidity}
            submitButtonText="Bekfräfta"
            onSubmit={handleSubmit}
          />
        </ChangeEmailContainer>
      </div>
    </>
  );
};

export default ChangeProfileInfo;
