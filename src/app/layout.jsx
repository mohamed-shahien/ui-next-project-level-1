import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Fotter from '@/components/fotter/fotter'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContexe'
const bodyFont = Montserrat({subsets:["latin"],weight:["400", "900","700"]})


export const metadata = {
  title: 'HexaStor - Home',
  description: 'An apple mobile which is nothing like apple',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
        <div className='container'>
        <Navbar/>
        {children}
        <Fotter/>
        </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
