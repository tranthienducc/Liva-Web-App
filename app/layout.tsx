import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/Wrapper";
import { ThemeProvider } from "@/providers/theme-provider";
import localFont from "next/font/local";
import { QueryProvider } from "@/providers/query-provider";
import { UserProvider } from "@/providers/user-provider";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "@/redux/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const telma = localFont({
  src: "./fonts/telma/Telma-Bold.otf",
  variable: "--font-telma",
  weight: "800",
});

export const metadata: Metadata = {
  title: "Liva - Realtime Video Sharing + Desktop App",
  description: "Realtime Video Sharing + Desktop App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <UserProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${geistSans.variable} ${telma.variable} antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ReduxProvider>
                <Wrapper>{children}</Wrapper>
              </ReduxProvider>
              <Toaster position="bottom-center" reverseOrder={false} />
            </ThemeProvider>
          </body>
        </html>
      </UserProvider>
    </QueryProvider>
  );
}
