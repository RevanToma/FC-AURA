import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import GobackNav from "../../../components/common/Navbar/GobackNav";
import ChangePasswordImg from "../../../assets/images/ChangePasswordImg.svg";
import { ChangeEmailContainer } from "../ChangeEmail/ChangeEmailStyles";
import ReusableForm from "../../../components/common/Form/ReusableForm";
import { InputType } from "../../../types/types";
import { ApolloError, gql, useMutation } from "@apollo/client";

const CHANGE_PASSWORD = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      password
    }
  }
`;

const ChangePassowrd = () => {
  const navigate = useNavigate();
  const { formData, setFormData, fieldValidity, setFieldValidity } = useForm([
    "password",
    "passwordConfirm",
  ]);
  const [changePassword, { error, loading }] = useMutation(CHANGE_PASSWORD);

  const handleSubmit = async (formData: Record<string, string | boolean>) => {
    if (formData.password !== formData.passwordConfirm) {
      console.error("passwords do not match");
      return;
    }
    try {
      const response = await changePassword({
        variables: {
          input: {
            password: formData.password,
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
      <GobackNav title="Byt Lösenord" />
      <div>
        <ChangeEmailContainer>
          <img src={ChangePasswordImg} alt="change password" />

          <ReusableForm
            fields={[
              {
                label: "Ditt nya Lösenord",
                type: InputType.password,
                name: InputType.password,
              },
              {
                label: "Ditt nya Lösenord",
                type: InputType.password,
                name: InputType.passwordConfirm,
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

export default ChangePassowrd;
