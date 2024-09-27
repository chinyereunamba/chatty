import { FormButton } from "../components";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const toLogin =()=>navigate('/login')
  return (
    <section className="grid place-content-center h-screen">
      <h2 className="text-3xl">Login or Sign up to continue</h2>
      <div className="flex gap-3 my-4">
        <FormButton
          handleClick={toLogin}
          buttonLabel="Login"
        />
        <FormButton
          handleClick={() => navigate("/register")}
          buttonLabel="Sign up"
        />
      </div>
    </section>
  );
}
