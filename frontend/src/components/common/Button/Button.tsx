import React, { FC, ReactElement, ReactNode } from "react";
import { ButtonType } from "./ButtonTypes";
import * as S from "./ButtonStyles";

import { Vortex } from "react-loader-spinner";
export interface ButtonProps {
  buttontypes: ButtonType;
  children: ReactNode;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: "button" | "submit";
  iconLeft?: ReactElement;
}

const Button: FC<ButtonProps> = ({
  buttontypes = ButtonType.SignIn,
  onClick,
  children,
  disabled,
  iconLeft,
  isLoading,
  ...otheprops
}) => {
  return (
    <S.StyledButton
      onClick={onClick}
      buttontypes={disabled ? ButtonType.Disabled : buttontypes}
      disabled={disabled || buttontypes === ButtonType.Disabled}
      {...otheprops}
    >
      {isLoading ? (
        <Vortex
          width={50}
          height={50}
          colors={["yellow", "black", "yellow", "black", "black", "yellow"]}
        />
      ) : (
        children
      )}
    </S.StyledButton>
  );
};

export default Button;
