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
  title: "Mi Bautizo Romina Sofía", 
  description: "Acompáñanos en este día tan especial. Haz clic para ver los detalles y confirmar tu asistencia.",
  
  // 1. BLOQUEO DE BUSCADORES (Mantenido: No aparecerá en Google)
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
    url: "https://bautizo-romina-sofia.invimon.com",
    siteName: "Invimon Digital",
    images: [
      {
        // CORRECCIÓN: Ruta absoluta completa para que WhatsApp encuentre la foto
        url: "https://bautizo-romina-sofia.invimon.com/fotos/portada.png", 
        width: 1200,
        height: 630,
        alt: "Invitación Digital",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  // 3. REFUERZO PARA TWITTER/WHATSAPP (Opcional pero recomendado para asegurar la miniatura)
  twitter: {
    card: "summary_large_image",
    title: "¡Estás Invitado!",
    description: "Te esperamos con mucha ilusión.",
    images: ["https://bautizo-romina-sofia.invimon.com/fotos/portada.png"],
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