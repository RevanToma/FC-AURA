import { theme } from "../../../theme/Theme";

export enum ButtonType {
  Disabled = "disabled",
  SmallTransparent = "smallTransparent",
  SignOut = "signout",
  SignIn = "signIn",
  Google = "google",
}

interface Buttons {
  [key: string]: {
    color?: string; // default: #fff
    background: string;
    width?: string; // default: fit-content
    height?: string; // default: 4.5rem
    border?: string; // default: none
    hoverBackground?: string;
    hoverColor?: string; //  default: #fff
    activeBackground?: string;
    activeColor?: string; //  default: #fff
    activeBorder?: string; //  default: none
    fontWeight?: string | number;
    fontSize?: string;
    fontFamily?: string;
    letterSpacing?: string;
  };
}

export const buttons: Buttons = {
  SignOut: {
    background: theme.color.primaryGreen,
  },

  signIn: {
    background: theme.color.primaryGreen,
    width: "35rem",
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "2rem",
    letterSpacing: "0.1rem",
  },
  disabled: {
    color: theme.color.darkWhite,
    background: theme.color.disabledButton,
    width: "35rem",
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "2rem",
    letterSpacing: "0.1rem",
  },
};
