import useAuthStore  from '../store';
const Home = () => {
  const { setLoggedIn, setAccessToken } = useAuthStore();

  const handleLogout = () => {
    setAccessToken(null);
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>Welcome to Home Page!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};


export default Home