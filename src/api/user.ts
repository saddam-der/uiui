import axios from "axios";

interface UserLogin {
  username: string;
  password: string;
}

interface LoginResponse {
  code: number;
  data: Record<string, object>;
  error: null | string;
  message: string;
}

/**
 *
 * @param user its included of required body to login
 * @param Loginresponse its included of response after login
 */
export const LOGIN_API = (user: UserLogin): Promise<LoginResponse> => {
  return axios.post("/login", user);
};
