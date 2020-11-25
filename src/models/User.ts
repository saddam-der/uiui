export interface UserModel {
  id: number;
  email: string;
  application_secret: string;
  mobile_no: string;
  name: string;
  role: string;
  token: string;
}

export interface UserLogin {
  username: string;
  password: string;
}
