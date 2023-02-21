import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
