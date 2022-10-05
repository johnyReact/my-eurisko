import palette from "../../../theme/colors.scss";
import { Button, CircularProgress, IconButton } from "@mui/material";

export const PrimaryButton = (props) => {
  const { disabled, type, onClick, className, icon, text, loading } = props;

  return (
    <Button
      sx={{ width: "100%", height: "40px" }}
      variant="contained"
      type={type ? type : "button"}
      onClick={onClick}
      disabled={loading}
      className={!text ? `icon-button-style ${className}` : className}
      color="primary"
    >
      {loading ? (
        <CircularProgress size={"1rem"} style={{ color: palette.thirdColor }} />
      ) : (
        <>
          {icon && icon}
          {text ? text : ""}
        </>
      )}
    </Button>
  );
};
