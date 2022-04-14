import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Translation } from "~/i18n/Translation";
import { Text } from "~/react/components/Text";

const Home: NextPage = () => {
  const { asPath, locale } = useRouter();

  return (
    <div className="flex min-h-screen bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex items-center container min-h-full mx-auto  p-4 rounded">
        <div className="flex flex-col">
          <Link href={asPath} locale={locale === "it" ? "en" : "it"}>
            <a>
              <Text color="text-white" size="2xl" transform="uppercase">
                {locale === "it" ? "en" : "it"}
              </Text>
            </a>
          </Link>
          <Text color="text-white" size="6xl" weight="semibold">
            <Translation id="title" />
          </Text>
          <div className="pt-2">
            <Text color="text-white" size="3xl">
              <Translation
                id="subtitle"
                values={{ library: "styled-components" }}
              />
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
