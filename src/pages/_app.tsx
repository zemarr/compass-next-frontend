import Layout from '@/components/layout'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Roboto_Serif } from 'next/font/google'


const Serif = Roboto_Serif({ subsets: ['latin'], variable: '--font-robotoSerif' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${Serif.className}`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
