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
};

const ReusableForm: FC<FormProps> = ({
  fields,
  onSubmit,
  submitButtonText,
  teamMember,
}) => {
  const [formData, setFormData] = useState<Record<string, string | boolean>>(
    {}
  );
  const initialValidity = fields.reduce((acc, field) => {
    acc[field.name] = false;
    return acc;
  }, {} as Record<string, boolean>);
  const [fieldValidity, setFieldValidity] =
    useState<Record<string, boolean>>(initialValidity);

  const isValidEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let isValid = false;

    if (name === "name" || name === "lastName") {
      isValid = value.length >= 3;
    } else if (name === "email") {
      isValid = isValidEmail(value);
    } else if (name === "password") {
      isValid = value.length >= 8;
    } else if (name === "passwordConfirm") {
      isValid = value.length >= 8;
    }

    setFieldValidity((prevValidity) => ({ ...prevValidity, [name]: isValid }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
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
              showValidIcon={["name", "lastName", "email"].includes(field.name)}
              isValid={fieldValidity[field.name]}
            />
          </div>
        ))}
        {teamMember && (
          <S.TeamMember>
            <h4>Är du lagmedlem?</h4>
            <S.ToggleCheckboxWrapper>
              <S.StyledToggleCheckbox
                onChange={(e) =>
                  setFormData({ ...formData, teamMember: e.target.checked })
                }
              />
              <S.ToggleSlider />
            </S.ToggleCheckboxWrapper>
          </S.TeamMember>
        )}
      </S.Form>
      <Button
        buttonType={ButtonType.SignIn}
        type="button"
        onClick={handleSubmit}
        disabled={!Object.values(fieldValidity).every((valid) => valid)}
      >
        {submitButtonText}
      </Button>
    </>
  );
};

export default ReusableForm;
