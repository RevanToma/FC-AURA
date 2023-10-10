import GobackNav from "../../../components/common/GoBackNav/GobackNav";
import ChangeEmailImg from "../../../assets/images/ChangeEmail.svg";
import * as S from "./ChangeEmailStyles";

import { ApolloError, useMutation } from "@apollo/client";

import { useNavigate } from "react-router-dom";
import { CHANGE_EMAIL } from "../../../Mutations/Mutations";
import { toast } from "sonner";
import { useAuth } from "../../../context/auth/auth";
import { useForm } from "react-hook-form";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import { ButtonType } from "../../../components/common/Button/ButtonTypes";
import VortexSpinner from "../../../components/common/Vortex/Vortex";
const ChangeEmail = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [changeUserEmail, { error, loading }] = useMutation(CHANGE_EMAIL);

  const onSubmit = async (data: Record<string, string>) => {
    try {
      if (error) {
        // Display a message to the user
        toast.error(error.message, {
          duration: 3000,
        });

        return; // Stop here and do not make the mutation request
      }

      const response = await changeUserEmail({
        variables: {
          input: {
            email: data.email.trim(),
          },
        },
      });

      // handle response
      if (response.data) {
        navigate("/account");

        toast.success(`Email ändrad till ${data.email}`);
      }
    } catch (error: ApolloError | any) {
      console.error("There was an error creating the user:", error);
      toast.error(error.message);
    }
  };

  if (loading) return <VortexSpinner />;
  return (
    <>
      <GobackNav title="Byt Email" />
      <div>
        <S.ChangeEmailContainer>
          <img src={ChangeEmailImg} alt="Change email" />

          <S.ChangeEmailForm onSubmit={handleSubmit(onSubmit)}>
            <S.Label>Din nya Email</S.Label>
            <Input
              placeholder="Nya email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Detta fält är obligatoriskt</span>}
            <Button type="submit" buttontypes={ButtonType.SignIn}>
              Bekräfta
            </Button>
          </S.ChangeEmailForm>
        </S.ChangeEmailContainer>
      </div>
    </>
  );
};

export default ChangeEmail;
