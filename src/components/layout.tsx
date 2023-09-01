import Navbar from './Navbar'
// import Footer from './footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Roboto_Serif } from 'next/font/google'


const Serif = Roboto_Serif({ subsets: ['latin'], variable: '---font-Serif' })

type LayoutProps = {
    children: React.ReactNode,
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <Navbar />
                <div className='layout mt-12 max-w-[1220px] w-full mx-auto'>{children}</div>
                {/* <Footer /> */}
            </ThemeProvider>
        </>
    )
}