import { ThemeProvider } from "degen";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "nextra-theme-docs/style.css";
import "degen/styles";

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultMode={"dark"}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
