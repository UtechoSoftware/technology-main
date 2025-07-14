import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#fff",
          black: "#000",
          dark: "#292929",
          secondary2: "#A9A9A9",
          primary: "#F7F7F7", // main color
          secondary: "#932724", // secondary color
          secondaryDark: "#1A1010", // secondary color dark
          acent: "#EAF5F8",
          muted: "#A9A9A9",
          ligthSecondary: "#F9FAFB",
          ligthSecondaryDark: "#FFFFFF",
        },
      },
      backgroundImage: {
        gradientlr:
          "linear-gradient(to right, #311414 0%, #2A1212 20%, #1A1010 40%, #1A1010 100%)",

        gradientrl:
          "linear-gradient(to left, #311414 0%, #2A1212 20%, #1A1010 40%, #1A1010 100%)",

        gradienttb:
          "linear-gradient(to bottom, #311414 0%, #2A1212 20%, #1A1010 40%, #1A1010 100%)",

        gradientbt:
          "linear-gradient(to top, #311414 0%, #2A1212 20%, #1A1010 40%, #1A1010 100%)",

        // Diagonal gradients - Top Left to Bottom Right
        gradienttlbr:
          "linear-gradient(to bottom right, #311414 0%, #2A1212 20%, #1A1010 40%, #1A1010 100%)",
        gradienttlbrsmooth:
          "linear-gradient(to bottom right, #311414 0%, #281111 15%, #1F0F0F 25%, #1A1010 100%)",
        gradientcenterout:
          "radial-gradient(circle, #311414 0%, #281111 40%, #1F0F0F 70%, #1A1010 100%)",
        gradientcenterin:
          "radial-gradient(circle, #1A1010 0%, #1F0F0F 40%, #281111 70%, #311414 100%)",
        // Diagonal gradients - Top Right to Bottom Left
        gradienttrbl:
          "linear-gradient(to bottom left, #311414 0%, #2A1212 20%, #1A1010 40%, #1A1010 100%)",
        gradienttrblsmooth:
          "linear-gradient(to bottom left, #311414 0%, #281111 15%, #1F0F0F 25%, #1A1010 100%)",
        gradientbrtlsmooth:
          "linear-gradient(to top left, #311414 0%, #281111 15%, #1F0F0F 25%, #1A1010 100%)",

        // Smoother transition version (recommended)
        gradientlrsmooth:
          "linear-gradient(to right, #311414 0%, #281111 15%, #1F0F0F 25%, #1A1010 100%)",
        gradientrlsmooth:
          "linear-gradient(to left, #311414 0%, #281111 15%, #1F0F0F 25%, #1A1010 100%)",
        gradienttbsmooth:
          "linear-gradient(to bottom, #311414 0%, #281111 15%, #1F0F0F 25%, #1A1010 100%)",
        gradientbtsmooth:
          "linear-gradient(to top, #311414 0%, #281111 15%, #1F0F0F 25%, #1A1010 100%)",
        serviceCardgradient:
          "linear-gradient(180.3deg, #292929 24.96%, rgba(147, 39, 36, 0.29) 311.93%)",
        serviceCardgradient2:
          "linear-gradient(to top, #2A1414 0%, #2A1313 35%, #1F0F0F 50%, #1A1010 100%)",
        cardGradient: "linear-gradient(to top, #3d0f0d, rgb(41, 41, 41))",
        cardGradientlr:
          "linear-gradient(to right, #2A2929, rgba(147, 39, 36, 0.1))",
      },
      boxShadow: {
        light: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        dark: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
      },
      // border radius
      borderRadius: {
        light: "0.25rem", // 4px
        medium: "0.5rem", // 8px
        dark: "1rem", // 16px
      },
      // opacity
      opacity: {
        disabled: "0.3",
      },
      // media screens
      screens: {
        xs: "400px", // Custom mobile breakpoint (smaller than 'sm')
        sm: "640px", // Tailwind's default 'sm' breakpoint
        md: "768px", // Tailwind's default 'md' breakpoint
        lg: "1024px", // Tailwind's default 'lg' breakpoint
        xl: "1280px", // Tailwind's default 'xl' breakpoint
        "2xl": "1536px", // Tailwind's default '2xl' breakpoint
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
