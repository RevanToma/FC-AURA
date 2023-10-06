import { FC } from "react";
import { GoBackNav, Title } from "./GoBackNavStyles";
import { BiChevronLeft } from "react-icons/bi";

type NavBarProps = {
  title: string;
  size?: number;
  goBack?: boolean;
};

const GobackNav: FC<NavBarProps> = ({ title, size, goBack }: NavBarProps) => {
  return (
    <GoBackNav>
      {goBack && (
        <BiChevronLeft
          size={size ? size : 40}
          color="#FFFFFF"
          cursor="pointer"
          onClick={() => window.history.back()}
        />
      )}
      <Title color="#FFFFFF">{title}</Title>
    </GoBackNav>
  );
};

export default GobackNav;
