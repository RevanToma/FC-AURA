import { FC } from "react";
import * as S from "./InputStyle";
import { BsCheck2Circle } from "react-icons/bs";
interface IInput {
  placeholder: string | undefined;
  type?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string | number | boolean;
  name?: string;
  readOnly?: boolean;
  require?: boolean;
  min?: number;
  max?: number;
  showValidIcon?: boolean;
  isValid?: boolean;
}

const Input: FC<IInput> = ({
  placeholder,
  type,
  onChange,
  value,
  name,
  readOnly,
  showValidIcon,
  isValid,
  ...otherProps
}) => {
  return (
    <>
      {type === "textarea" ? (
        <S.StyledTextarea
          value={value?.toString()}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          readOnly={readOnly}
          {...otherProps}
        />
      ) : (
        <S.StyledInput
          value={value?.toString()}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          name={name}
          readOnly={readOnly}
          {...otherProps}
        />
      )}
      <S.SvgSpan>
        {showValidIcon && isValid && (
          <BsCheck2Circle size={26} color="#269846" />
        )}
      </S.SvgSpan>
    </>
  );
};

export default Input;
