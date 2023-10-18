import './globals.css'
import { Noto_Sans } from 'next/font/google'
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

const noto = Noto_Sans({
  weight: ['400','600','800'],
  subsets: ['greek'],
})

export const metadata = {
  title: 'Areeb ur Rub | Porfolio',
  description: 'Areeb ur Rub\'s portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className+" bg-violet-darker text-white"}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
