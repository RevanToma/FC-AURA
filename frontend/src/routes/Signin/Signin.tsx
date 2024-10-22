import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/images/FCAURA-Logo.png";
import ReusableForm from "../../components/common/Form/ReusableForm";
import { InputType } from "../../types/types";
import { Footer, GenericSignContainer } from "../Signup/SignupStyles";
import * as S from "./SigninStyles";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useAuth } from "../../context/auth/auth";

import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { LOGIN_MUTATION } from "../../Mutations/Mutations";
import Button from "../../components/common/Button/Button";
import { ButtonType } from "../../components/common/Button/ButtonTypes";
import VortexSpinner from "../../components/common/Vortex/Vortex";
import { toast } from "sonner";
import { login } from "./../../../../Backend/src/utils/auth";

const Signin = () => {
  const [signinMutation, { error, loading }] = useMutation(LOGIN_MUTATION);

  const { formData, setFormData, fieldValidity, setFieldValidity } = useForm([
    "email",
    "password",
  ]);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (formData: Record<string, string | boolean>) => {
    try {
      const { data } = await signinMutation({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
      if (data && data.loginUser) {
        auth.login(data.loginUser);

        toast.success(`Välkommen ${data.loginUser.user.name}`);
      }
    } catch (error: ApolloError | any) {
      console.error("There was an error creating the user:", error);
      toast.error(error.message);
    }
  };
  const handleGoogleSignIn = () => {
    window.location.href = process.env.REACT_APP_GOOGLE!;
  };

  return (
    <GenericSignContainer>
      <img src={Logo} alt="fcaura logo" />
      <S.SigninHeader>Logga in med Email och Lösenord</S.SigninHeader>

      {loading && <VortexSpinner />}

      <ReusableForm
        fields={[
          {
            label: "Din Email",
            type: InputType.email,
            name: InputType.email,
            autocomplete: "email",
          },
          {
            label: "Lösenord",
            type: InputType.password,
            name: InputType.password,
            autocomplete: "current-password",
          },
        ]}
        formData={formData}
        propFieldValidity={fieldValidity}
        onFormDataChange={setFormData}
        onFieldValidityChange={setFieldValidity}
        onSubmit={handleSubmit}
        submitButtonText="Logga in"
      />
      <Button
        buttontypes={ButtonType.AddSkill}
        onClick={() => navigate("/signup")}
      >
        Skapa konto
      </Button>

      <Footer>
        <h6>eller logga in med</h6>
        <FcGoogle size={40} onClick={handleGoogleSignIn} target="_blank" />
      </Footer>
    </GenericSignContainer>
  );
};

export default Signin;
