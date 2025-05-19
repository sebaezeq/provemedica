import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        <Image src="https://equipamiento-medico.net/images/logos/433.png" alt="Logo" width={200} height={100} />

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
