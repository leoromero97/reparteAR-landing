import { ThemeProvider } from 'context/theme';
import './globals.css'
import { Poppins } from 'next/font/google'
import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

export const metadata = {
  title: 'reparteAR',
  description: 'Landing page de reparteAR - Servicio de moto mensajería y envíos en CABA y GBA',
  keywords: ['Moto', 'Mensajería', 'Logística', 'Envíos', 'CABA', 'GBA', 'Capital Federal', 'Mercado Envíos Flex'],
  authors: [{ name: 'Leonardo Esteban Gerbacio Romero' }],
  creator: 'Leonardo Esteban Gerbacio Romero',
  generator: 'Next.js',
  applicationName: 'reparteAR Landing Page',
  colorScheme: 'light',
  openGraph: {
    images: 'https://repartear.com/reparteAR-cover.png',
    title: 'reparteAR',
    description: 'Landing page de reparteAR - Servicio de moto mensajería y envíos en CABA y GBA',
    url: 'https://repartear.com',
    siteName: 'reparteAR landing page',
  },
  category: 'Logística',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
