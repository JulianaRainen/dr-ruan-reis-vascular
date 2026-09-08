import type { Metadata } from 'next';
import './globals.css';
import './site.css';
import './identity-block-01.css';
export const metadata: Metadata={title:'Dr. Ruan Reis | Cirurgia Vascular',description:'Cirurgia vascular com diagnóstico preciso e cuidado individualizado em Sergipe.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body>{children}</body></html>}
