'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import { usePathname } from 'next/navigation';
import ToastProvider from "./component/ToastProvider";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== '/login' && pathname !== '/signup' && <Navbar />}
        <ToastProvider>
          {children}
        </ToastProvider>

      </body>
    </html>
  );
}
