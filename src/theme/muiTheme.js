import { createTheme } from "@mui/material/styles";
import palette from "./colors.scss";
// import "./color.scss";
import "./variables.scss";

export const appTheme = createTheme({
  palette: {
    secondary: {
      main: palette.secondaryColor,
    },
    primary: {
      main: palette.primaryColor,
    },
  },
  MUITextField: {
    styleOverrides: {
      root: {
        backgroundColor: palette.whiteColor,
        borderRadius: "5px",
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            border: `1px solid  ${palette.primaryColor}`,
          },
        },

        fieldset: {
          border: `1px solid  ${palette.inputColor}`,
        },

        input: {
          "&::placeholder": {
            color: palette.primaryColor,
            opacity: "1",
          },
        },
      },
    },
  },
});
