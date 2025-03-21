import { dir } from "i18next";

import "swiper/css";
import "../globals.css";
import "swiper/css/navigation";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";
export const metadata = getStaticMetaData({
  title: "Home Page | Cyberani",
  description:
    " Next-generation cybersecurity services for industry leaders in KSA and beyond.",
  isRobotFollow: false,
});
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  if (!locale) {
    if (process.env.NODE_ENV !== "production") {
      throw new Error(
        "Unable to find `next-intl` locale. Have you configured the middleware?"
      );
    } else {
      notFound();
    }
  }

  return (
    <html lang={locale} dir={dir(locale)} className={dir(locale)}>
      <body className={`overflow-x-hidden`}>
        {/* <GoogleAnalytics /> */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
