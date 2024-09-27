import { Link } from "react-router-dom";
import { Form, FormTitle } from "../components";
import { FormEvent, useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="grid place-content-center h-screen">
      <FormTitle title="Welcome" intro="Create an account with us" />
      <Form
        inputList={[
          {
            name: "email",
            type: "email",
            label: "Email",
            id: "email",
            placeholder: "johndoe@mail.com",
            change: (e) => setUser({ ...user, email: e.currentTarget.value }),
          },
          {
            name: "username",
            type: "text",
            label: "Username",
            id: "username",
            placeholder: "johndoe",
            change: (e) =>
              setUser({ ...user, username: e.currentTarget.value }),
          },
          {
            name: "password",
            type: "password",
            label: "Password",
            id: "password",
            placeholder: "********",
            change: (e) =>
              setUser({ ...user, password: e.currentTarget.value }),
          },
        ]}
        submitFnc={handleSubmit}
        buttonLabel="Sign up"
      />
      <div className="my-2">
        <small className="text-base">
          Already have an account?{" "}
          <Link to={"/login"} className="text-teal-400">
            Login
          </Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
