import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React, { ReactFragment } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document<{}> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ) as unknown as ReactFragment,
      };
    } finally {
      sheet.seal();
    }
  }

  render = () => (
    <Html>
      <Head>
        <meta
          key="content-type"
          content="text/html; charset=utf-8"
          httpEquiv="Content-Type"
        />
        <meta key="og:site_name" content="__name__" property="og:site_name" />
        <meta key="og:type" content="article" property="og:type" />
        <meta key="robots" content="index, follow" name="robots" />
        <meta key="theme-color" content="#ffffff" name="theme-color" />
        <meta
          key="tile-color"
          content="#ffffff"
          name="msapplication-TileColor"
        />
        <meta
          key="tile-image"
          content="/mstile-150x150.png"
          name="msapplication-TileImage"
        />
        <meta
          key="twitter:card"
          content="summary_large_image"
          name="twitter:card"
        />
        <meta key="twitter:site" content="__name__" name="twitter:site" />
        <meta
          key="x-ua-compatible"
          content="IE=edge"
          httpEquiv="X-UA-Compatible"
        />
        <meta
          key="apple-mobile-web-app-status-bar"
          content="default"
          name="apple-mobile-web-app-status-bar"
        />

        <meta key="og:image" content="/og_image.png" property="og:image" />
        <meta key="og:image:height" content="630" property="og:image:height" />
        <meta key="og:image:width" content="1200" property="og:image:width" />
        <meta
          key="twitter:image"
          content="/og_image.png"
          name="twitter:image"
        />

        <link
          href="/android-chrome-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link
          href="/android-chrome-512x512.png"
          rel="icon"
          sizes="512x512"
          type="image/png"
        />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link href="/favicon.ico" rel="icon" />

        <link href="/manifest.json" rel="manifest" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
