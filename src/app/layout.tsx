import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "Life Track",
  description: "Life Track",
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
                <div className="w-full border border-red-500 px-1.5">
                  <SidebarTrigger />
                </div>
                <div className="h-full w-full p-3">{children}</div>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
