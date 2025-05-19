import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Provemedica',
  description: 'Equipamiento médico hospitalario',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
