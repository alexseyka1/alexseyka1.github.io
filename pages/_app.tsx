import { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

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

      <Topbar />

      <main className="main-content">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default MyApp;
