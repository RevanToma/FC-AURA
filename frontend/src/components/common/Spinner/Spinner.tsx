import { SpinnerContainer } from "./SpinnerStyles";
import { FC } from "react";

interface ISpinnerProps {
  size?: "default" | "large";
}

const Spinner: FC<ISpinnerProps> = ({ size = "default" }) => {
  return (
    <SpinnerContainer size={size} role="alert">
      <div />
    </SpinnerContainer>
  );
};

export default Spinner;
