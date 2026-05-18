import { cn } from "@utils/cn";
import { AppProps } from "next/app";
import { Comic_Neue } from "next/font/google";
import Head from "next/head";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import "../styles/globals.css";

const openSans = Comic_Neue({
  weight: ["300", "400"],
  variable: "--font-open-sans",
  subsets: ["latin"],
  adjustFontFallback: false,
  preload: true,
});

function MyApp({
  Component,
  pageProps,
}: Pick<AppProps, "Component" | "pageProps">) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <title>Oleksii Haidai - Software Engineer</title>
        <meta
          name="description"
          content="I make amazing complex systems that solve business problems and help it grow, as well as easy to use"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link rel="icon" type="image/png" href="#" />
      </Head>

      <div className={cn("w-screen", openSans.variable)}>
        <Topbar />

        <main className="main-content">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MyApp;
