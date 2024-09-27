import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Login, Register, ResetPassword } from "./pages";

const App = () => {
  return (
    <section className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="login" />
          <Route element={<Register />} path="register" />
          <Route element={<ResetPassword />} path="reset-password" />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
