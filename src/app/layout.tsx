import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "hitrostnotipkanje",
  description: "App for touch typing practice",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script
            src="https://analytics.andrej.tech/js/script.js"
            data-domain="speedtyping.org"
            defer
          />
        </head>
        <body className={`font-sans ${inter.variable} dark flex flex-col`}>
          {children}
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
