import GobackNav from "../../../components/common/Navbar/GobackNav";
import ChangePorfileInfoImg from "../../../assets/images/ChangePorfileInfoImg.svg";
import { ChangeEmailContainer } from "../ChangeEmail/ChangeEmailStyles";
import ReusableForm from "../../../components/common/Form/ReusableForm";
import { InputType, UpdateUserInput } from "../../../types/types";
import { useForm } from "../../../hooks/useForm";
import { ApolloError, gql, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  CHANGE_PROFILE_INFO,
  GET_PROFILE_INFO,
} from "../../../Mutations/Mutations";

const ChangeProfileInfo = () => {
  const { formData, setFormData, fieldValidity, setFieldValidity } = useForm([
    "bio",
    "weight",
    "length",
    "instagram",
  ]);
  const navigate = useNavigate();
  const [changeProfileInfo, { error }] = useMutation(CHANGE_PROFILE_INFO);
  const {
    data: userProfileData,

    refetch,
  } = useQuery(GET_PROFILE_INFO);

  useEffect(() => {
    console.log("userProfileData changed:", userProfileData);

    if (userProfileData) {
      setFormData({
        bio: userProfileData.me.bio || "",
        weight: userProfileData.me.weight || "",
        length: userProfileData.me.length || "",
        instagram: userProfileData.me.instagram || "",
      });
    }
    refetch();
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

      const response = await changeProfileInfo({
        variables: {
          input: input,
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
      <GobackNav title="Ändra profil info" />
      <div>
        <ChangeEmailContainer>
          <img src={ChangePorfileInfoImg} alt="change profile" />

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
                type: InputType.number,

                name: InputType.length,
                placeholder: "Din Längd i cm",
                value: formData.length,
              },
              {
                type: InputType.text,
                name: InputType.instagram,
                placeholder: "Din Instagram",
                value: formData.instagram,
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
