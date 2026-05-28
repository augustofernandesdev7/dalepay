import type { Metadata } from 'next'
import { Baloo_2, Sora, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-wordmark',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dale - Gateway',
  description:
    'O gateway de pagamento brasileiro feito para infoprodutores. Receba via Pix com liquidação D+0, split automático e antifraude nativo.',
  icons: {
    icon:     '/dale-appicon-dark.png',
    shortcut: '/dale-appicon-dark.png',
    apple:    '/dale-appicon-dark.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${baloo.variable} ${sora.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
