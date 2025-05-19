import Link from 'next/link'
import Image from 'next/image';


export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
<Image src="/images/Logo.jpg" alt="Logo" width={200} height={100} />

      </Link>
      <nav>
        <Link href="/">Empresa</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/presupuesto">Presupuesto</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  )
}
