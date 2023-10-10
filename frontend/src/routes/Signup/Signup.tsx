import Logo from "../../assets/images/FCAURA-Logo.png";
import ReusableForm from "../../components/common/Form/ReusableForm";
import { FcGoogle } from "react-icons/fc";

import * as S from "./SignupStyles";
import { InputType } from "../../types/types";
import { ApolloError, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { CREATE_USER } from "../../Mutations/Mutations";
import { useAuth } from "../../context/auth/auth";
import { toast } from "sonner";
import { ReactNode, useEffect, useState } from "react";

const SignUp = () => {
  const [createUser, { error, loading }] = useMutation(CREATE_USER);
  const [toastError, setToastError] = useState<string | null>(null);
  const navigate = useNavigate();
  const auth = useAuth();

  const { formData, setFormData, fieldValidity, setFieldValidity } = useForm([
    "firstName",
    "lastName",
    "email",
    "password",
    "passwordConfirm",
  ]);

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
        auth.login(response.data);
        navigate("/setup-info");
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

    setToastError(err);
    toast.error(err);
    setToastError(null);
  };

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error]);

  const handleGoogleSignIn = () => {
    window.location.href = process.env.REACT_APP_GOOGLE!; // This URL should match the route you've set up in your backend.
  };

  if (loading) return <p>Loading...</p>;

  return (
    <S.GenericSignContainer>
      <img src={Logo} alt="fcaura logo" />
      <h1>Registrering till FC Aura</h1>

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
        <FcGoogle size={40} onClick={handleGoogleSignIn} />
      </S.Footer>
    </S.GenericSignContainer>
  );
};

export default SignUp;
