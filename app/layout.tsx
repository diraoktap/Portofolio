import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/Navbar";

// Konfigurasi Font Lokal
const Space_Mono = localFont({
  src: '../public/fonts/Space_Mono/SpaceMono-Regular.ttf', // Sesuaikan dengan nama file kamu
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
        className={`${Space_Mono.variable} ${silkscreen.variable} antialiased`}
      >
        <Navbar />
        {children}
        {modal} {/* Render modal di sini agar sejajar dengan konten utama */}
      </body>
    </html>
  );
}
