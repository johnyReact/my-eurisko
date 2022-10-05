import jwt_decode from "jwt-decode";

//check if tocken expired or still valid
export const isUserLoggedIn = () => {
  let token = localStorage.getItem("token");
  let currentDate = new Date();
  try {
    if (jwt_decode(token).exp * 1000 < currentDate.getTime()) {
      localStorage.clear();
      return false;
    } else return true;
  } catch {
    localStorage.clear();
    return false;
  }
};
