import "@/styles/globals.css";
import "@/styles/main.scss";
import clsx from "clsx";

import Providers from "./providers";

import MainLayout from "@/components/mainLayout";
import { montserrat, nunito, poppins, roboto } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "white" }],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          poppins.variable,
          roboto.variable,
          nunito.variable,
          montserrat.variable
        )}
      >
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
