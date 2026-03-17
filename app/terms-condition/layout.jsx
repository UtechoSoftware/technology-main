import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Terms & Conditions",
  description: `Terms of Service and conditions of use for ${siteConfig.name}. By using our website and services you agree to these terms.`,
};

export default function TermsLayout({ children }) {
  return children;
}
