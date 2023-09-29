import Logo from "../../assets/images/FCAURA-Logo.png";
import ReusableForm from "../../components/common/Form/ReusableForm";
import { FcGoogle } from "react-icons/fc";

import * as S from "./SignupStyles";
import { InputType } from "../../types/types";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

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
  const [createUser] = useMutation(CREATE_USER);
  const navigate = useNavigate();

  const handleSubmit = async (formData: Record<string, string | boolean>) => {
    console.log(formData);

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
        console.log(response.data.createUser);
        navigate("/");
        // Maybe navigate the user to a different page or store the token somewhere
      }
    } catch (e: ApolloError | any) {
      console.error("There was an error creating the user:", e);
      alert(e.message);
    }
  };

  return (
    <S.SignupContainer>
      <img src={Logo} alt="fcaura logo" />

      <h1>Registrering till Aura FC</h1>
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
        onSubmit={handleSubmit}
        submitButtonText="Skapa konto"
        teamMember={true}
      />

      <S.Footer>
        <h6>eller skapa konto med</h6>
        <FcGoogle size={40} />
      </S.Footer>
    </S.SignupContainer>
  );
};

export default SignUp;
