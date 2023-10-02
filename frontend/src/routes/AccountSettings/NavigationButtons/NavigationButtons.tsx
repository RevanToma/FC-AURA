import { BiChevronRight } from "react-icons/bi";
import { ButtonType } from "../../../components/common/Button/ButtonTypes";
import Button from "../../../components/common/Button/Button";
import * as S from "./NavigationStyles";

interface NavigationItemProps {
  children?: React.ReactNode;

  text?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  showArrow?: boolean;
}

const NavigationItem = ({
  children,
  text,
  icon,
  onClick,
  showArrow = true,
}: NavigationItemProps) => {
  return (
    <Button buttontypes={ButtonType.Settings} onClick={onClick}>
      <S.NavigationContainer>
        {icon && (
          <div>
            {icon} {text}
          </div>
        )}

        {children ? <div>{children}</div> : ""}

        {showArrow && <BiChevronRight color="#fff" size={29} />}
      </S.NavigationContainer>
    </Button>
  );
};

export default NavigationItem;
