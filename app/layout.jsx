import "@/styles/globals.css";
import "@/styles/main.scss";
import clsx from "clsx";

import Providers from "./providers";

import MainLayout from "@/components/mainLayout";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import { montserrat, nunito, poppins, roboto } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.shortName} | Integrated Security Technology Systems`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "security systems",
    "CCTV surveillance",
    "access control",
    "intrusion sensors",
    "integrated security",
    "commercial security",
    "government security",
    "24/7 surveillance",
    "Protection Technologies",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.shortName} | Integrated Security Technology Systems`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} — Integrated Security Technology Systems`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Integrated Security Technology Systems`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "white" }],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <OrganizationSchema />
      </head>
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
