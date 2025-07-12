import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./assistens/styles.css";
import Script from "next/script";
import Navbar from "./page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TECNIGYM BQ",
  description: "mantenimiento de equipos de gimnasio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Mantenimiento de equipos de gimnasio" />
        <meta name="author" content="TECNIGYM BQ" />
        <title>TECNIGYM BQ</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/styles.css" rel="stylesheet" />
      </head>
      <body>
        {/* Cargar scripts de Bootstrap con prioridad antes de que se interactúe con la página */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />

        <Navbar children={undefined}/>

        <main className="Informacion">
          {children}
        </main>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; TecniGym BQ 2025</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
