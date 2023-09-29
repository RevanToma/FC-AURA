import { FC } from "react";
import { useState } from "react";
import * as S from "./ReusableFormStyles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { ButtonType } from "../Button/ButtonTypes";

type InputField = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
};

type FormProps = {
  fields: InputField[];
  onSubmit: (formData: Record<string, string | boolean>) => void;
  submitButtonText: string;
  teamMember?: boolean;
  formData: Record<string, string | boolean>;
  propFieldValidity: Record<string, boolean>;
  onFormDataChange: (data: Record<string, string | boolean>) => void;
  onFieldValidityChange: (validity: Record<string, boolean>) => void;
};

const ReusableForm: FC<FormProps> = ({
  fields,
  onSubmit,
  submitButtonText,
  teamMember,
  formData,
  propFieldValidity,
  onFormDataChange,
  onFieldValidityChange,
}) => {
  // const [formData, setFormData] = useState<Record<string, string | boolean>>(
  //   {}
  // );
  const initialValidity = fields.reduce((acc, field) => {
    acc[field.name] = false;
    return acc;
  }, {} as Record<string, boolean>);

  const [internalFieldValidity, setInternalFieldValidity] =
    useState<Record<string, boolean>>(initialValidity);

  const isValidEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update form data
    let updatedFormData = { ...formData, [name]: value };
    onFormDataChange(updatedFormData); // Notify parent about form data changes

    // Determine the validity of the changed field
    let isValid = false;
    if (name === "name" || name === "lastName") {
      isValid = value.length >= 3;
    } else if (name === "email") {
      isValid = isValidEmail(value);
    } else if (name === "password" || name === "passwordConfirm") {
      isValid = value.length >= 8;
    }

    // Update field validity
    let updatedFieldValidity = { ...internalFieldValidity, [name]: isValid };

    setInternalFieldValidity(updatedFieldValidity); // Update internal state
    onFieldValidityChange(updatedFieldValidity); // Notify parent about the validity change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(formData);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedFormData = { ...formData, teamMember: e.target.checked };
    onFormDataChange(updatedFormData); // Notify parent about the change
  };

  return (
    <>
      <S.Form>
        {fields.map((field, index) => (
          <div key={index}>
            <S.Label>{field.label}</S.Label>
            <Input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              showValidIcon={[
                "name",
                "lastName",
                "email",
                "password",
                "passwordConfirm",
              ].includes(field.name)}
              isValid={propFieldValidity[field.name]}
            />
          </div>
        ))}
        {teamMember && (
          <S.TeamMember>
            <h4>Är du lagmedlem?</h4>
            <S.ToggleCheckboxWrapper>
              <S.StyledToggleCheckbox onChange={handleCheckboxChange} />
              <S.ToggleSlider />
            </S.ToggleCheckboxWrapper>
          </S.TeamMember>
        )}
      </S.Form>

      <Button
        buttonType={ButtonType.SignIn}
        type="button"
        onClick={handleSubmit}
        disabled={!Object.values(internalFieldValidity).every((valid) => valid)}
      >
        {submitButtonText}
      </Button>
    </>
  );
};

export default ReusableForm;
