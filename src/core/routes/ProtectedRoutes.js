// In ProtectedRoutes.js
import { Navigate, Outlet } from "react-router-dom";
import { isUserLoggedIn } from "../../helpers/function";

const ProtectedRoutes = ({ shouldbeloggedIn }) => {
  if (shouldbeloggedIn === true)
    return isUserLoggedIn() === true ? (
      <Outlet />
    ) : (
      <Navigate to="/login" replace />
    );
  else
    return isUserLoggedIn() === false ? (
      <Outlet />
    ) : (
      <Navigate to="/dashboard" replace />
    );
};
export default ProtectedRoutes;
