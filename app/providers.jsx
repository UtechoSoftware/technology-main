"use client";

import { ReduxProvider } from "@/redux/reduxProvider";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }) {
  const router = useRouter();

  return (
    <ReduxProvider>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <ToastProvider
            placement="top-center"
            toastProps={{
              radius: "sm",
              variant: "flat",
              timeout: 1000,
            }}
          />
          <Toaster />
          {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </ReduxProvider>
  );
}
