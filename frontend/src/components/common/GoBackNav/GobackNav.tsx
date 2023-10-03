import { FC } from "react";
import { GoBackNav, Title } from "./GoBackNavStyles";
import { BiChevronLeft } from "react-icons/bi";

type NavBarProps = {
  title: string;
  size?: number;
};

const GobackNav: FC<NavBarProps> = ({ title, size }: NavBarProps) => {
  return (
    <GoBackNav>
      <BiChevronLeft
        size={size ? size : 40}
        color="#FFFFFF"
        cursor="pointer"
        onClick={() => window.history.back()}
      />
      <Title color="#FFFFFF">{title}</Title>
    </GoBackNav>
  );
};

export default GobackNav;
