import { FC, forwardRef } from "react";
import * as S from "./InputStyle";
import { BsCheck2Circle } from "react-icons/bs";

type InputElement = HTMLInputElement | HTMLTextAreaElement;

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
  min?: number | string;
  max?: number | string;
  showValidIcon?: boolean;
  isValid?: boolean;
}

const Input: FC<IInput> = forwardRef<InputElement, IInput>(
  (
    {
      placeholder,
      type,
      onChange,
      value,
      name,
      readOnly,
      showValidIcon,
      isValid,
      ...otherProps
    },
    ref
  ) => {
    return (
      <>
        {type === "textarea" ? (
          <S.StyledTextarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            value={value?.toString()}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            readOnly={readOnly}
            {...otherProps}
          />
        ) : (
          <S.StyledInput
            ref={ref as React.Ref<HTMLInputElement>}
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
  }
);

export default Input;
