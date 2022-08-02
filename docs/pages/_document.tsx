import { SkipNavLink } from "@reach/skip-nav";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <SkipNavLink />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
