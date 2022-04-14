import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { useTranslations } from "~/i18n/useTranslations";
import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const translations = useTranslations();

  const { locale } = useRouter();

  if (!translations) {
    return null;
  }

  return (
    <IntlProvider
      defaultLocale="en"
      locale={locale || "en"}
      messages={translations}
    >
      <Component {...pageProps} />;
    </IntlProvider>
  );
}

export default MyApp;
