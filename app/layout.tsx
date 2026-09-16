import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'File Service — Professional ECU Solutions',
  description: 'Soluzioni professionali per file ECU, DPF, EGR, IMMO e DTC. File verificati per Flex, MPPS e i principali strumenti automotive.',
}

export const viewport: Viewport = {
  themeColor: '#0b0d0f',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>
}
