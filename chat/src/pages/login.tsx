import { Link, useNavigate } from "react-router-dom";
import { Form, FormTitle } from "../components";
import { FormEvent, useState } from "react";
import api from "../services";
import useAuthStore  from "../store";

type User = {
  email: string;
  password: string;
};

const Login = () => {
  const { setLoggedIn, setUser } = useAuthStore();
  const [userDetail, setUserDetail] = useState<User>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const email = userDetail.email;
    const password = userDetail.password;

    api
      .post("auth/login/", {
        email: email,
        password: password,
      })
      .then((res) => {
        setUser(res.data);
        setLoggedIn(true);
        console.log(res);
        navigate("/");
      });

    console.log(email, password);
  };
  return (
    <section className="grid place-content-center h-screen">
      <FormTitle title="Welcome back!" intro="Login to your account!" />
      <Form
        inputList={[
          {
            name: "email",
            type: "email",
            label: "Email",
            id: "email",
            placeholder: "johndoe@mail.com",
            change: (e) => setUserDetail({ ...userDetail, email: e.currentTarget.value }),
          },
          {
            name: "password",
            type: "password",
            label: "Password",
            id: "password",
            placeholder: "********",
            change: (e) =>
              setUserDetail({ ...userDetail, password: e.currentTarget.value }),
          },
        ]}
        submitFnc={handleSubmit}
        buttonLabel="Login"
      />
      <div className="my-2 flex justify-between flex-wrap">
        <small className="text-base">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-teal-400">
            Sign up
          </Link>
        </small>
        <small className="text-base">
          <Link to={"/reset-password"} className="text-teal-400">
            Forgot password?{" "}
          </Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
