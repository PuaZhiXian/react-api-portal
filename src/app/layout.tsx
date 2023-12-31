import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import {NextUIProvider} from "@nextui-org/react";
import React from "react";
import Toaster from "react-hot-toast";

export const metadata: Metadata = {
  title: 'FYP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
