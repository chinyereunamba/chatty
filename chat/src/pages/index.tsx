import Login from "./login";
import Register from "./register";
import ResetPassword from "./resetPassword";
import Unauthenticated from "./unauthenticated";
import Home from "./home";


type UserData = {
  access: string;
  refresh: string;
  user: {
    pk: number;
    email: string;
    username: string;
  };
};
export { Login, Register, ResetPassword, Unauthenticated, Home };

export { type UserData };
