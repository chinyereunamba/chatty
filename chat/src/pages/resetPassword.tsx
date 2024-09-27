import { FormTitle, Form } from "../components";

const ResetPassword = () => {
  const handleSubmit = () => {};
  return (
    <section className="grid place-content-center h-screen">
      <FormTitle title="Reset password" intro="Forgot your password?" />
      <Form
        buttonLabel="Reset password"
        inputList={[
          {
            label: "Email",
            name: "passwordReset",
            type: "email",
            id: "email",
            placeholder: "johndoe@mail.com",
            change: () => {},
          },
        ]}
        submitFnc={handleSubmit}
      />
    </section>
  );
};

export default ResetPassword;
