import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import Header from "~/component/Header";

import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Header/>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
