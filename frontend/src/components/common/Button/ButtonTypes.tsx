import { theme } from "../../../theme/Theme";

export enum ButtonType {
  Disabled = "disabled",
  SmallTransparent = "smallTransparent",
  SignOut = "signout",
  SignIn = "signIn",
  Google = "google",
  Settings = "settings",
  Skills = "skills",
  AddSkill = "addskills",
  Reject = "reject",
  Accept = "accept",
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
  signout: {
    background: theme.color.primaryRed,
  },
  reject: {
    background: theme.color.primaryRed,
    width: "10rem",
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "1.5rem",
    letterSpacing: "0.1rem",
    hoverBackground: "rgba(241, 2, 2, 0.8)",
  },
  accept: {
    background: theme.color.primaryGreen,
    width: "10rem",
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "1.5rem",
    letterSpacing: "0.1rem",
    hoverBackground: "rgba(38, 152, 70, 0.8)",
  },

  signIn: {
    background: theme.color.primaryGreen,
    width: "35rem",
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "2rem",
    letterSpacing: "0.1rem",
    hoverBackground: "rgba(38, 152, 70, 0.8)",
  },

  settings: {
    background: theme.color.primarySettingsColor,
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
  skills: {
    background: theme.color.black,
  },
  addskills: {
    background: theme.color.primaryYellow,
    color: theme.color.primaryBackground,
    hoverBackground: "rgba(241, 210, 2, 0.8)",
    hoverColor: "#323232",
    width: "100%",
  },
};
