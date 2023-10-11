import { css } from "styled-components";

export const theme = {
  color: {
    darkWhite: "#F7F7F7",
    placeholderText: "#888888",
    black: "#323232",
    primaryGreen: "#269846",
    disabledButton: "#7FB781",
    primaryYellow: "#F1D202",
    primaryRed: "#CC0000",
    primaryBackground: "#323232",
    primarySettingsColor: "#303841",
    transparent: "transparent",
    white: "#fff",
  },

  primaryShadow: "0px 4px 4px rgba(0, 0, 0, 0.30)",
  navShadow: "0px 4px 4px rgba(241, 210, 2, 0.30)",
  playerCardShadow: "0px 4px 4px rgba(241, 210, 2, 0.50)",

  radius: {
    button: "10px",
  },

  button: {
    transition: "all 0.3s",
    padding: "1.6rem 3rem",
  },
  h6: css`
    font-family: "Poppins";
    font-size: 2.3rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
  `,
  footerH6: css`
    font-family: "Roboto";
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
  `,
  h1: css`
    font-family: "Roboto";
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 2.4rem;
  `,

  label: css`
    font-family: "Poppins";
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.4rem;
  `,
  matchInfo: css`
    font-family: "Roboto";
    font-weight: 600;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    line-height: 2.5rem;
  `,
  h4: css`
    font-family: "Roboto";
    color: #f1d202;
    font-weight: 500;
    font-size: 1.6rem;
    letter-spacing: 2px;
  `,
  settingsFont: css`
    font-family: "Poppins";
    letter-spacing: 0.1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.4rem;
    color: white;
  `,
  backgroundInfo: css`
    font-family: "Roboto";
    font-weight: 500;
    font-size: 1.6rem;
    letter-spacing: 2%;
    line-height: 2.4rem;
    paragraph-spacing: 5px;
  `,
};
