import { useSelector } from "react-redux";
import { userType } from "./Types.d";

export const userData = () => {
  useSelector((state: userType) => state.user.userData);
};
export const useToken = () => {
  useSelector((state: userType) => state.user.token);
};

export const baseurl = () => {
  useSelector((state: userType) => state.user.BASE_URL);
};
