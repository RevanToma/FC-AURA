import React, { FC, ReactElement, ReactNode } from "react";
import { ButtonType } from "./ButtonTypes";
import * as S from "./ButtonStyles";

export interface ButtonProps {
  buttonType: ButtonType;
  children: ReactNode;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: "button" | "submit";
  iconLeft?: ReactElement;
}

const Button: FC<ButtonProps> = ({
  buttonType = ButtonType.SignIn,
  onClick,
  children,
  disabled,
  iconLeft,
  ...otheprops
}) => {
  return (
    <S.StyledButton
      onClick={onClick}
      buttonType={buttonType}
      disabled={disabled || buttonType === ButtonType.Disabled}
      {...otheprops}
    >
      {children}
    </S.StyledButton>
  );
};

export default Button;
