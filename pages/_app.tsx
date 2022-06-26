import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Navigation from "../components/Navigation";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
