import GobackNav from "../../../components/common/Navbar/GobackNav";
import ChangeEmailImg from "../../../assets/images/ChangeEmail.svg";
import * as S from "./ChangeEmailStyles";

import ReusableForm from "../../../components/common/Form/ReusableForm";
import { InputType } from "../../../types/types";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const CHANGE_EMAIL = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      email
    }
  }
`;

const ChangeEmail = () => {
  const navigate = useNavigate();
  const { formData, setFormData, fieldValidity, setFieldValidity } = useForm([
    "email",
  ]);

  const [changeUserEmail, { error, loading }] = useMutation(CHANGE_EMAIL);

  const handleSubmit = async (formData: Record<string, string | boolean>) => {
    try {
      const response = await changeUserEmail({
        variables: {
          input: {
            email: formData.email,
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
    <>
      <GobackNav title="Byt Email" />
      <div>
        <S.ChangeEmailContainer>
          <img src={ChangeEmailImg} alt="Change email" />

          <ReusableForm
            fields={[
              {
                label: "Din nya Email",
                type: InputType.email,
                name: InputType.email,
              },
            ]}
            formData={formData}
            propFieldValidity={fieldValidity}
            onFormDataChange={setFormData}
            onFieldValidityChange={setFieldValidity}
            onSubmit={handleSubmit}
            submitButtonText="Bekfräfta"
          />

          {/* <Button buttontypes={ButtonType.SignIn}>Bekräfta</Button> */}
        </S.ChangeEmailContainer>
      </div>
    </>
  );
};

export default ChangeEmail;
