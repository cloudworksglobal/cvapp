import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfredo Palmieri | Solutions Engineer & Growth Strategist",
  description: "Architecting robust digital solutions & revenue engines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
