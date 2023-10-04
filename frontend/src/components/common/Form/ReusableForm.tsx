import { FC } from "react";
import { useState } from "react";
import * as S from "./ReusableFormStyles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { ButtonType } from "../Button/ButtonTypes";

type InputField = {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  value?: string | number | boolean;
};

type FormProps = {
  fields: InputField[];
  onSubmit: (formData: Record<string, string | boolean>) => void;
  submitButtonText: string;
  teamMember?: boolean;
  formData: Record<string, string | boolean>;
  propFieldValidity: Record<string, boolean>;
  onFormDataChange?: (data: Record<string, string | boolean>) => void;
  onFieldValidityChange?: (validity: Record<string, boolean>) => void;
  value?: string | number;
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
  value,
}) => {
  const isValidEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update form data
    const updatedFormData = { ...formData, [name]: value };

    // Determine the validity of the changed field
    let isValid = false;
    if (name === "name" || name === "lastName") {
      isValid = value.length >= 3;
    } else if (name === "email") {
      isValid = isValidEmail(value);
    } else if (name === "password" || name === "passwordConfirm") {
      isValid = value.length >= 8;
    }

    const updatedFieldValidity = { ...propFieldValidity, [name]: isValid };

    // Notify parent
    if (onFormDataChange) onFormDataChange(updatedFormData);
    if (onFieldValidityChange) onFieldValidityChange(updatedFieldValidity);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedFormData = { ...formData, teamMember: e.target.checked };
    if (onFormDataChange) onFormDataChange(updatedFormData);
  };

  console.log(formData);
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
              value={field.value}
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
        buttontypes={ButtonType.SignIn}
        type="button"
        onClick={handleSubmit}
        disabled={false}
      >
        {submitButtonText}
      </Button>
    </>
  );
};

export default ReusableForm;
