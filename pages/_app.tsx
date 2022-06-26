import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../lib/AuthContext";
import Navigation from "../components/Navigation";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContext.Provider value={{ user: {}, username: "jeff" }}>
      <Navigation />
      <Component {...pageProps} />
      <Toaster />
    </AuthContext.Provider>
  );
}

export default MyApp;
