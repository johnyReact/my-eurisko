import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { appTheme } from "./theme/muiTheme";
import { useDispatch } from "react-redux";
import { alertAction } from "./store/Alert";
//components import
import Routes from "./core/routes/Routes";
import AlertMessage from "./layout/alert/Alert";

import "./App.scss";
function App() {
  const dispatch = useDispatch();
  const showAlert = useSelector((state) => state.alert);
  useEffect(() => {
    setTimeout(() => {
      dispatch(
        alertAction.show({
          visible: false,
          text: "",
          type: "",
        })
      );
    }, 5000);
  }, [showAlert]);
  return (
    <ThemeProvider theme={appTheme}>
      <Routes />
      {showAlert.alertVisible && (
        <AlertMessage text={showAlert.text} type={showAlert.type} />
      )}
    </ThemeProvider>
  );
}

export default App;
