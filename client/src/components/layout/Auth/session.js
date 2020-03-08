// import Cookies from "js-cookie";
import axios from "axios";

export const getSession = (setAuthentificated) => {
  axios
    .get("http://localhost:5000/api/user/verify", { withCredentials: true })
    .then((res) => setAuthentificated(true))
    .catch((error) => setAuthentificated(false));
};
export const logOut = (setAuthentificated) => {
  axios
    .get("http://localhost:5000/api/user/logout", { withCredentials: true })
    .then((res) => setAuthentificated(false))
    .catch((error) => setAuthentificated(false));
};
