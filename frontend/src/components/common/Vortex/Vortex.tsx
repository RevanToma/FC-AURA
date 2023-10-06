import { Vortex } from "react-loader-spinner";
import { VortexContainer } from "./VortexStyles";
import { FC } from "react";

const VortexSpinner: FC = () => {
  return (
    <VortexContainer>
      <Vortex
        colors={["yellow", "black", "yellow", "black", "black", "yellow"]}
        width={300}
        height={300}
      />
    </VortexContainer>
  );
};

export default VortexSpinner;
