import { useGoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Send the token ID to your Django backend
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/google/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_token: tokenResponse.access_token,
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log("User authenticated:", data);
        // Handle successful login response (e.g., store tokens and navigate)
      } else {
        console.error("Login failed:", res);
      }
    },
    onError: (error) => {
      console.error("Google Login Failed:", error);
    },
  });

  return (
    <button
      onClick={() => login()}
      className="p-2.5 bg-teal-900 hover:bg-teal-900/70 transition-colors rounded-lg w-full"
    >
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
