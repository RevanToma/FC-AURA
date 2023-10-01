import Logo from "../../assets/images/FCAURA-Logo.png";
import ReusableForm from "../../components/common/Form/ReusableForm";
import { FcGoogle } from "react-icons/fc";

import * as S from "./SignupStyles";
import { InputType } from "../../types/types";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      status
      user {
        email
        lastName
        name
        password
        passwordConfirm
      }
    }
  }
`;
const SignUp = () => {
  const [createUser, { error, loading }] = useMutation(CREATE_USER);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Record<string, string | boolean>>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    teamMember: false,
  });

  const [fieldValidity, setFieldValidity] = useState<Record<string, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const handleSubmit = async (formData: Record<string, string | boolean>) => {
    try {
      const response = await createUser({
        variables: {
          input: {
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            passwordConfirm: formData.passwordConfirm,
            teamMember: formData.teamMember,
          },
        },
      });

      // handle response
      if (response.data) {
        navigate("/");
        // Maybe navigate the user to a different page or store the token somewhere
      }
    } catch (error: ApolloError | any) {
      console.error("There was an error creating the user:", error);
    }
  };
  const handleError = (error: ApolloError | any) => {
    let err;

    if (error.message.includes("Duplicate field value")) {
      err = "Email finns redan registrerad";
    } else {
      err = "Något gick fel";
    }

    return err;
  };

  return (
    <S.GenericSignContainer>
      <img src={Logo} alt="fcaura logo" />

      <h1>Registrering till Aura FC</h1>
      <p>{error && handleError(error)}</p>
      <ReusableForm
        fields={[
          {
            label: "Förnamn",
            type: InputType.text,
            name: InputType.firstName,
          },
          {
            label: "Efternamn",
            type: InputType.text,
            name: InputType.lastName,
          },
          {
            label: "Din Email",
            type: InputType.email,
            name: InputType.email,
          },
          {
            label: "Lösenord",
            type: InputType.password,
            name: InputType.password,
          },
          {
            label: "Bekräfta lösenord",
            type: InputType.password,
            name: InputType.passwordConfirm,
          },
        ]}
        formData={formData}
        propFieldValidity={fieldValidity}
        onFormDataChange={setFormData}
        onFieldValidityChange={setFieldValidity}
        onSubmit={handleSubmit}
        submitButtonText="Skapa konto"
        teamMember={true}
      />

      <S.Footer>
        <h6>eller skapa konto med</h6>
        <FcGoogle size={40} />
      </S.Footer>
    </S.GenericSignContainer>
  );
};

export default SignUp;
