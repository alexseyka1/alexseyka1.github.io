import { cn } from "@utils/cn";
import { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import "../styles/globals.css";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  subsets: ["latin", "latin-ext"],
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

      <div className={cn("w-screen font-sans", openSans.variable)}>
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
