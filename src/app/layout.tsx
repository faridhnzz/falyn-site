import "../styles/globals.css";
import type { Metadata } from "next";
import type { ChildrenProps } from "~types/default";
import { Inter, Fira_Code } from "next/font/google";
import { cn } from "@utils";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@lib/theme-provider";
import { Toaster } from "@components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://fayln.com"
      : "http://localhost:3000"
  ),
  title: {
    template: "%s | Farid Nizam",
    default: "Farid Nizam",
  },
  description:
    "Hey, I am Farid Nizam. A Network Engineering also a Pull-stack Developer (pull everything from the internet).",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Farid Nizam",
    description: "A Network Engineering also a Pull-stack Developer.",
    siteName: "Farid Nizam",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Farid Nizam",
    description: "A Network Engineering also a Pull-stack Developer.",
    site: "@faridhnzz",
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, firaCode.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextTopLoader color="#e11d48" showSpinner={true} />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
