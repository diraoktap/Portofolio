import type { Metadata } from "next";
import { Space_Mono, Silkscreen } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

// Konfigurasi Font Lokal
const silkscreen = localFont({
  src: '../public/fonts/Silkscreen/Silkscreen-Regular.ttf', // Sesuaikan dengan nama file kamu
  variable: '--font-silkscreen',
});



export const metadata: Metadata = {
  title: "Dira Okta Prindana - Portfolio",
  description: "Welcome to my portfolio! I'm a passionate developer specializing in Next.js. Explore my projects, skills, and experience as I create innovative web solutions. Let's connect and collaborate on exciting ventures!",
};

export default function RootLayout({
  children,
  modal, // Tambahkan props modal di sini
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode; // Dan definisikan tipenya
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${silkscreen.variable} antialiased`}
      >
        <Navbar />
        {children}
        {modal} {/* Render modal di sini agar sejajar dengan konten utama */}
      </body>
    </html>
  );
}
