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
});
