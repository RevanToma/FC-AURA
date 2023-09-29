import { FC } from "react";
import * as S from "./InputStyle";
interface IInput {
  placeholder: string;
  type?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
  name?: string;
  readOnly?: boolean;
  require?: boolean;
  min?: number;
  max?: number;
}

const Input: FC<IInput> = ({
  placeholder,
  type,
  onChange,
  value,
  name,
  readOnly,
  ...otherProps
}) => {
  return (
    <>
      {type === "textarea" ? (
        <S.StyledTextarea
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          readOnly={readOnly}
          {...otherProps}
        />
      ) : (
        <S.StyledInput
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          name={name}
          readOnly={readOnly}
          {...otherProps}
        />
      )}
    </>
  );
};

export default Input;
