import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Life Track",
    template: "Life Track | %s",
  },
  description:
    "A comprehensive life tracking system designed to help you better manage and record all aspects of your life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <div className="flex flex-col w-screen h-screen">
                <Navbar />
                <div className="flex-1 overflow-hidden p-3">{children}</div>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
