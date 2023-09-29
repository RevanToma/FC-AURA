import { FC } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { GoBackNav, Title } from "./GoBackNavStyles";

type NavBarProps = {
  title: string;
  size?: number;
};

const GobackNav: FC<NavBarProps> = ({ title, size }: NavBarProps) => {
  return (
    <GoBackNav>
      <FaChevronLeft
        size={size ? size : 26}
        color="#FFFFFF"
        cursor="pointer"
        onClick={() => window.history.back()}
      />
      <Title color="#FFFFFF">{title}</Title>
    </GoBackNav>
  );
};

export default GobackNav;
