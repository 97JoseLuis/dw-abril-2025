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

export const metadata = {
  title: "Página Principal",
  description: "Esta es la página principal de la aplicación.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container">
          <div className="card" style={{ marginTop: 40, marginBottom: 40 }}>
            <h1 className="title" style={{ marginBottom: 12 }}>
              Proyecto Práctico con Next.js
            </h1>
            <p className="text" style={{ marginBottom: 24 }}>
              Este es el Proyecto Práctico hecho con esfuerzo y dedicación.
            </p>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}