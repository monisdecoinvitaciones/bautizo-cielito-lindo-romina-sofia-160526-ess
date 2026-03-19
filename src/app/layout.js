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

// CONFIGURACIÓN DE METADATOS
export const metadata = {
  title: "Mi Bautizo Romina Sofía", // Cambia esto al nombre del evento
  description: "Acompáñanos en este día tan especial. Haz clic para ver los detalles y confirmar tu asistencia.",
  
  // 1. BLOQUEO DE BUSCADORES (Para que no salga en Google)
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },

  // 2. MINIATURA PARA WHATSAPP / REDES (Open Graph)
  openGraph: {
    title: "¡Estás Invitado!",
    description: "Te esperamos con mucha ilusión. Haz clic para ver la invitación completa.",
    url: "https://bautizo-romina-sofia.invimon.com", // Cambia por tu URL real
    siteName: "Invimon Digital",
    images: [
      {
        url: "/fotos/portada.png", // LA RUTA DE TU IMAGEN DE MINIATURA
        width: 1200,
        height: 630,
        alt: "Invitación Digital",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}