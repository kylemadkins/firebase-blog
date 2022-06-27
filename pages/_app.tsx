import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { useUserData } from "../lib/hooks";
import { AuthContext } from "../lib/AuthContext";
import Navigation from "../components/Navigation";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();

  return (
    <AuthContext.Provider value={userData}>
      <Navigation />
      <Component {...pageProps} />
      <Toaster />
    </AuthContext.Provider>
  );
}

export default MyApp;
