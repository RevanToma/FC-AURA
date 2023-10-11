import { useNavigate } from "react-router-dom";

import GobackNav from "../../../components/common/GoBackNav/GobackNav";
import ChangePasswordImg from "../../../assets/images/ChangePasswordImg.svg";
import { ChangeEmailContainer } from "../ChangeEmail/ChangeEmailStyles";

import { ApolloError, useMutation } from "@apollo/client";
import { CHANGE_PASSWORD } from "../../../Mutations/Mutations";
import { useForm } from "react-hook-form";
import * as S from "../ChangeEmail/ChangeEmailStyles";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import { ButtonType } from "../../../components/common/Button/ButtonTypes";
import { toast } from "sonner";
import VortexSpinner from "../../../components/common/Vortex/Vortex";
import { BiCheckCircle } from "react-icons/bi";
const ChangePassowrd = () => {
  const navigate = useNavigate();

  const [changePassword, { loading }] = useMutation(CHANGE_PASSWORD);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data: Record<string, string>) => {
    if (data.password !== data.passwordConfirm) {
      toast.error("Lösenorden matchar inte");
      return;
    }
    try {
      const response = await changePassword({
        variables: {
          input: {
            password: data.password,
          },
        },
      });

      // handle response
      if (response.data) {
        navigate("/account");
        toast.success(`Lösenord ändrat`);
      }
    } catch (error: ApolloError | any) {
      console.error("There was an error creating the user:", error);
    }
  };
  if (loading) return <VortexSpinner />;
  return (
    <>
      <GobackNav title="Byt Lösenord" />
      <div>
        <ChangeEmailContainer>
          <img src={ChangePasswordImg} alt="change password" />

          <S.ChangeEmailForm onSubmit={handleSubmit(onSubmit)}>
            <S.Label>
              Ditt nya lösenord
              {touchedFields.password && !errors.password && (
                <S.TouchedSvg>
                  <BiCheckCircle color="green" size={30} />
                </S.TouchedSvg>
              )}
            </S.Label>
            <Input
              type="password"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && (
              <span>Lösenordet måste innehålla minst 8 tecken</span>
            )}

            <S.Label>Bekräfta lösenord</S.Label>

            <Input
              type="password"
              {...register("passwordConfirm", { required: true })}
            />
            {errors.passwordConfirm && <span>Detta fält är obligatoriskt</span>}

            <Button buttontypes={ButtonType.SignIn}>Bekrfäta</Button>
          </S.ChangeEmailForm>
        </ChangeEmailContainer>
      </div>
    </>
  );
};

export default ChangePassowrd;
