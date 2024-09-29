import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Login, Register, ResetPassword, Unauthenticated } from "./pages";
import useAuthStore from "./store";

const App = () => {
  const { isLoggedIn } = useAuthStore();

  // const handleLogout = () => {
  //   setAccessToken(null);
  //   setLoggedIn(false);
  // };


  return (
    <section className="min-h-screen">
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <Route element={<Home />} path="/" />
          ) : (
            <>
              <Route element={<Unauthenticated />} path="/" />
              <Route element={<Login />} path="login" />
              <Route element={<Register />} path="register" />
              <Route element={<ResetPassword />} path="reset-password" />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
