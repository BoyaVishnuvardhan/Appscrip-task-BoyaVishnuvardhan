import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Listing Page | Appscrip",
  description: "Browse latest products with best prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}