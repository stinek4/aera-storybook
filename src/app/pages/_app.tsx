import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
 
const inter = Inter({  weight: '400',
subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
<>
<style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
<Component {...pageProps} />
</>
}