import './globals.css'
import Nav from '../components/navigation/Nav'
import UrlBar from '../lib/UrlBar/UrlBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
<UrlBar/> 
<Nav/>
 {children}

  </>
}