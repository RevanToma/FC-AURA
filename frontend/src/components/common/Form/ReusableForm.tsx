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
  const [fieldValidity, setFieldValidity] = useState<Record<string, boolean>>(
    {}
  );
  const isValidEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (
      (name === "name" && value.length >= 3) ||
      (name === "lastName" && value.length >= 3) ||
      (name === "email" && isValidEmail(value)) // You can add more specific validation for the email if needed
    ) {
      setFieldValidity({ ...fieldValidity, [name]: true });
    } else {
      setFieldValidity({ ...fieldValidity, [name]: false });
    }
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
      >
        {submitButtonText}
      </Button>
    </>
  );
};

export default ReusableForm;
