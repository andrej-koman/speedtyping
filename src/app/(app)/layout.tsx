import "~/styles/globals.css";

import Header from "../_components/header";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CSPostHogProvider } from "../providers";

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
        <CSPostHogProvider>
          <body className={`font-sans ${inter.variable} dark flex flex-col`}>
            <Header />
            {children}
          </body>
        </CSPostHogProvider>
      </html>
    </ClerkProvider>
  );
}
