import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Life Track",
    template: "%s | Life Track",
  },
  description: "Tracked your life by this system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-2 flex flex-col justify-around gap-2`}
      >
        <header className="w-full border-2 rounded-lg border-yellow-400 p-2 flex justify-between items-center">
          <Badge>Life Track</Badge>
          <Button>Home</Button>
          <Button>Login</Button>
          <Button>Register</Button>
          <Button>About</Button>
          <Button>Help</Button>
        </header>
        {children}
        <div className="w-full border-2 rounded-lg border-yellow-400 p-2 flex justify-between items-center">
          <p>© 2022 Life Track</p>
          <p>
            Powered by{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener">
              Next.js
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
