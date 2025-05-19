import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        <img src="https://equipamiento-medico.net/images/logos/433.png" alt="Provemedica Logo" />
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
