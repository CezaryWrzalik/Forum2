import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, GlobalStyles, lightTheme } from "../styles/ThemeConfig";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout toggleTheme={toggleTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
