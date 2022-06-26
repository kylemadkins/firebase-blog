import { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
