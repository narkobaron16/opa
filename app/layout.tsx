import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "FutureTech",
    description: "FutureTech",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            style={{ backgroundColor: '#1A1A1A' }} // Жесткий фикс фона
        >
        {children}
        </body>
        </html>
    );
}