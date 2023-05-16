import { Metadata } from "next";
import React from 'react';
import "./globals.css";
import { Inter } from "next/font/google";
import { HiddenDisableRightClickComponent } from "./client_api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delicious OS",
  description: "Responsive design for tablet interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HiddenDisableRightClickComponent />
        {children}
      </body>
    </html>
  );
}
