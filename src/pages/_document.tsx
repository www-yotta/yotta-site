import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { PUBLIC_GA_ID, PUBLIC_UA_ID } from "../utils/constants";

class MyDocument extends Document {
  render() {
    return (
      <Html style={{ scrollBehavior: "smooth" }}>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
            gtag('config', '${PUBLIC_UA_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
